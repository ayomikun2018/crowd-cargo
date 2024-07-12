"use client";

import * as React from "react";
import { Button } from "../ui/button";
import { FileRejection, useDropzone } from "react-dropzone";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Iconly } from "react-iconly";
import { Label } from "@radix-ui/react-label";

export function PhotoUpload() {
  const [files, setFiles] = React.useState([]);
  const [rejected, setRejected] = React.useState([]);
  const [uploading, setUploading] = React.useState(false);

  const onDrop = React.useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles.length) {
      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setFiles((prevFiles) => [...prevFiles, ...newFiles].slice(0, 4));
      setRejected([]);
      setUploading(false);
    }

    if (rejectedFiles) {
      setRejected(rejectedFiles);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".png", ".gif"],
    },
    maxSize: 1024 * 3000,
    onDrop,
  });

  return (
    <div className="flex flex-col items-center gap-6 ">
      <div className="mt-16 flex flex-col gap-2 w-full ">
        <Label htmlFor="Product Image" className="font-medium rounded-full">
          Product Image
        </Label>
        <p className="font-light text-sm text-gray-400">Upload only 4 images</p>
        {files.length ? (
          <div className="mx-auto flex flex-wrap gap-2 ">
            {files.map((file, index) => (
              <div key={index} className="relative h-10 w-10 lg:h-20 lg:w-20">
                <Image
                  src={file.preview}
                  alt={file.name || "Product picture"}
                  layout="fill"
                  style={{ objectFit: "cover" }}
                  onLoad={() => {
                    URL.revokeObjectURL(file.preview);
                  }}
                />
              </div>
            ))}
            {files.length < 4 && (
              <Button onClick={() => open()} className=" self-center">
                Add Image
              </Button>
            )}
            {files.length < 4 && (
              <p className=" font-light  text-sm text-gray-400">
                You can only add up to 4 product images
              </p>
            )}
          </div>
        ) : (
          !uploading && (
            <div {...getRootProps()} className="mt-4 text-center w-full">
              <input {...getInputProps()} />
              {isDragActive ? (
                <div className="mx-auto flex h-full w-full flex-col items-center justify-center space-y-4 rounded-md border border-dashed bg-success px-4 py-16 text-center text-muted">
                  <div className="overflow-hidden">
                    <Iconly
                      name="Upload"
                      className="text-blue-300"
                      size="large"
                      primaryColor={null}
                      secondaryColor={null}
                    />
                  </div>
                  <p className="text-lg">Drop Photo Here</p>
                  <span>or</span>
                  <Button disabled>Add Photo</Button>
                  <span>File Types: JPEG, PNG, GIF. Size limited to 3 MB</span>
                </div>
              ) : (
                <div
                  className={cn(
                    "outline-dashed flex flex-col items-center justify-center h-28 mt-2  outline-gray-300 rounded-sm ",
                    rejected?.length &&
                      "bg-destructive text-destructive-foreground"
                  )}
                >
                  <div className="overflow-hidden">
                    <Iconly
                      name="Upload"
                      className="text-blue-300"
                      size="large"
                      primaryColor={null}
                      secondaryColor={null}
                    />
                  </div>
                  <div className="justify-items-center font-light text-sm">
                    <span className="text-blue-300 ">Browse</span> to Upload
                    <p className="pl-6">images</p>
                  </div>
                </div>
              )}
            </div>
          )
        )}
        {uploading && (
          <div className="mt-4 text-center w-full">
            <div
              className={cn(
                "mx-auto flex h-full w-full flex-col items-center justify-center space-y-4 rounded-md border border-dashed bg-input px-4 py-16 text-center outline-gray-300 ",
                rejected?.length && "bg-destructive text-destructive-foreground"
              )}
            >
              <div className="overflow-hidden">
                <Iconly
                  name="Upload"
                  className="text-blue-300"
                  size="large"
                  primaryColor={null}
                  secondaryColor={null}
                />
              </div>
              <div className="justify-items-center font-light">
                <span className="text-blue-300">Browse</span> to Upload
                <p className="pl-6">images</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
