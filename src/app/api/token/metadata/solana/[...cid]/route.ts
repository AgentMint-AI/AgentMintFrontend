import { NextRequest, NextResponse } from "next/server";
import { createAutoDriveApi, downloadFile } from "@autonomys/auto-drive";

const apiKey = process.env.AUTO_DRIVE_API_KEY;
if (apiKey == undefined) {
  throw new Error("AUTO_DRIVE_API_KEY is not set");
}

async function fetchFromAutoDrive(cid: string) {
  const api = createAutoDriveApi({ apiKey, network: "taurus" });
  try {
    const stream = await downloadFile(api, cid);
    let file = Buffer.alloc(0);
    for await (const chunk of stream) {
      file = Buffer.concat([file, chunk]);
    }
    return file;
  } catch (error) {
    console.error("Error downloading file:", error);
    throw new Error("CID not found");
  }
}

async function processMetadata(cid: string): Promise<NextResponse> {
  try {
    const fileBuffer = await fetchFromAutoDrive(cid);
    const jsonString = fileBuffer.toString("utf-8");
    const metadata = JSON.parse(jsonString.trim());

    // Extract image CID from the URL
    const imageCid = metadata.image.split("/").pop();

    // Extract only the required fields for Solana metadata format
    const solanaMetadata = {
      name: metadata.name,
      symbol: metadata.symbol,
      description: metadata.description || "",
      image: `${process.env.NEXT_PUBLIC_HOST}/api/token/metadata/solana/image/${imageCid}`,
    };

    return NextResponse.json(solanaMetadata, { status: 200 });
  } catch (error) {
    console.error("Error processing metadata:", error);
    return NextResponse.json(
      { error: "Invalid metadata format" },
      { status: 400 }
    );
  }
}

async function processImage(cid: string): Promise<NextResponse> {
  try {
    const fileBuffer = await fetchFromAutoDrive(cid);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/octet-stream",
        "Content-Disposition": `attachment; filename="image-${cid}"`,
      },
    });
  } catch (error) {
    console.error("Error processing image:", error);
    return NextResponse.json(
      { error: "Failed to process image" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const pathname = req.nextUrl.pathname;
    const segments = pathname.split("/").filter(Boolean);
    const type = segments[segments.length - 2]; // 'image' or the CID for metadata
    const cid = segments[segments.length - 1];

    if (!cid) {
      return NextResponse.json({ error: "CID is required" }, { status: 400 });
    }

    if (type === "image") {
      return await processImage(cid);
    } else {
      return await processMetadata(cid);
    }
  } catch (err) {
    console.error("Request failed:", err);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
