import classNames from "classnames";
import MarkdownIt from "markdown-it";
import styles from "./rich-text.module.scss";

export const RichText = ({ text, className }) => {
  const md = new MarkdownIt({
    html: true,
  });

  const htmlText = md.render(text);

  return (
    <div
      className={classNames(styles.rich, className)}
      dangerouslySetInnerHTML={{ __html: htmlText }}
    />
  );
};
