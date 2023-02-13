import "@johnlindquist/kit";

export async function styledOutput(text: string) {
  const styles = "flex justify-center items-center text-4xl h-full";

  return await div(text, styles);
}
