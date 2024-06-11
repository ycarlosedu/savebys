type Props = {
  behavior?: ScrollBehavior;
};

export const scrollToTop = ({ behavior }: Props = { behavior: "smooth" }) => {
  window.scrollTo({ top: 0, behavior });
};
