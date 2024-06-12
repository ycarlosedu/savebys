import { toast } from "sonner";

export const handleCopyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success("Copiado com sucesso!", { duration: 1000 });
  } catch (err) {
    toast.error("Ocorreu um erro ao copiar, tente novamente mais tarde!", {
      duration: 1000
    });
  }
};
