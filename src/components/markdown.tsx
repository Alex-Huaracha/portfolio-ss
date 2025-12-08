import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeExternalLinks from 'rehype-external-links';

type MarkdownProps = React.ComponentProps<typeof ReactMarkdown>;

export function Markdown(props: MarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[
        rehypeRaw,
        [
          rehypeExternalLinks,
          { target: '_blank', rel: 'nofollow noopener noreferrer' },
        ],
      ]}
      {...props}
    />
  );
}
