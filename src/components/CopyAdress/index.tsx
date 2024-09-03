"use client";

import { handleCopyToClipboard } from "@/utils/copyToClipboard";

const OUR_ADRESS = "https://savebys.com";

export default function CopyAdress() {
  return (
    <fieldset className="flex w-full items-center border-2 border-gray-secondary rounded-xl max-w-[360px] xs:min-w-[360px]">
      <input
        type="text"
        name="project-url"
        id="project-url"
        className="bg-transparent p-4 h-[50px] w-full text-lg"
        readOnly
        value={OUR_ADRESS}
      />
      <button
        type="submit"
        className="link-btn h-[50px] px-8 w-full max-w-[124px] text-lg rounded-[10px]"
        onClick={() => handleCopyToClipboard(OUR_ADRESS)}
      >
        COPIAR
      </button>
    </fieldset>
  );
}
