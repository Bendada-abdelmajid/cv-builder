import "@uploadcare/blocks/web/lr-file-uploader-regular.min.css";
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Settings2, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import {
  deleteFile,
  UploadcareSimpleAuthSchema,
} from '@uploadcare/rest-client';
import * as LR from '@uploadcare/blocks';
import { useCVContext } from "@/lib/CVContext";
import { Label } from "./ui/label";
LR.registerBlocks(LR);

const uploadcareSimpleAuthSchema = new UploadcareSimpleAuthSchema({
  publicKey: process.env.UPLOADCARE_PUBLIC_KEY as string,
  secretKey: process.env.UPLOADCARE_SECRET_KEY as string,
});




type Props = {};

type ApplyResult = {
  originalUrl: string
  cdnUrlModifiers: string
  cdnUrl: string
}

const ImageUploader = (props: Props) => {
  const { state, dispatch } = useCVContext();
  const image = state.profileImage
  const [open, setOpen] = useState(false);

  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let editor: HTMLElement | null = null;
    const apply = (e: CustomEvent<ApplyResult>) => {
      console.log(`applay`, e);
      dispatch({ type: 'UPDATE_ProfileImage', value: { ...image, url: e.detail.cdnUrl + "/200x200/" } });
      setOpen(false)
    };
    const cancel = () => {
      setOpen(false)
    };

    const attachEventListeners = () => {
      if (editorRef.current) {
        editor = editorRef.current.querySelector("#my-editor");
        editor?.addEventListener('apply', apply as EventListener);
        editor?.addEventListener('cancel', cancel);
      }
    };

    if (open) {
      attachEventListeners();
    }

    return () => {
      if (editor) {
        editor.removeEventListener('apply', apply as EventListener);
        editor.removeEventListener('cancel', cancel);
      }
    };
  }, [open, image, dispatch]);
  useEffect(() => {
    console.log(image)
    if (!image) {
      console.log("yes")
      const ctx = document.querySelector('lr-upload-ctx-provider')

      ctx?.addEventListener('done-click', uploadComplete as EventListener)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image])


  const deleteImage = async () => {
    if (image && image.uuid) {
      // const result = await deleteFile(
      //   {

      //     uuid: image.uuid,
      //   },
      //   { authSchema: uploadcareSimpleAuthSchema }
      // )
      // console.log(result)
      dispatch({ type: 'UPDATE_ProfileImage', value: null });
    } else {
      alert("somthing went wrong please try again")
    }
  }

  const uploadComplete = (e: CustomEvent<LR.OutputCollectionState>) => {
    console.log(e)
    const file = e.detail.allEntries[0]
    dispatch({ type: 'UPDATE_ProfileImage', value: { url: file.cdnUrl, uuid: file.uuid } });
  };

  return (
    <>
      {image && image.url ?
        <div className=" w-full p-1 spce-y-2 order-1">
          <Label>Profile Image</Label>
          {/* <Image className="size-[70px] object-cover rounded object-top" src={image.url} width="200" height="200" alt="profile" /> */}
          <div className="flex gap-3 justify-between ">
            <Button size={"lg"} className="flex text-xs gap-2 w-full justify-between" onClick={() => setOpen(true)} variant={"secondary"}>
              <span >Edit Image</span>
              <Settings2 size={16} />
            </Button>
            <Button size={"lg"} className="flex text-xs gap-2 " onClick={deleteImage} variant={"destructive"}>
              <span >Delete Image</span>
              <Trash2 size={16} />
            </Button>
          </div>
        </div>
        :
        <>
          <lr-upload-ctx-provider hidden ctx-name="my-uploader"></lr-upload-ctx-provider>
          <lr-config ctx-name="my-uploader" max-local-file-size-bytes="10000000"
            img-only="true"
            source-list="local, url, camera, dropbox" pubkey={"390988fc9184b0777f66"}></lr-config>
          <div className="space-y-2 order-1">
            <Label>Profile Image</Label>
            <lr-file-uploader-regular class="w-full h-12" id="my-uploader" ctx-name="my-uploader"  > </lr-file-uploader-regular>
          </div>

        </>
      }


      <div className={`grid place-content-center fixed w-full h-full top-0 left-0 bg-black/40 z-[10000] transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {open && image && image.url && (
          <div ref={editorRef}>
            <lr-cloud-image-editor
              id="my-editor"
              ctx-name="my-editor"
              class="image-editor !w-[600px] !h-[550px] pb-3 rounded bg-white border"
              cdn-url={image.url}
            ></lr-cloud-image-editor>
          </div>
        )}
      </div>
    </>
  );
};
// uuid="db9809d9-bb6e-4e2e-9f1a-8d863e8dfc86"
export default ImageUploader;





// <Widget
// tabsCss="bg-red"
// publicKey="390988fc9184b0777f66"
// value="db9809d9-bb6e-4e2e-9f1a-8d863e8dfc86"
// crop=""
// effects={['blur', 'sharp', 'grayscale']}
// imagesOnly
// onChange={uplodeComplete}
// 


