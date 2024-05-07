type ResourcesBoxProps = {
  name: string;
  count: number;
};
export default function ResourcesBox({ count, name }: ResourcesBoxProps) {
  return (
    <div className="resources-box">
      <div className="resources-box_header">
        <div className="resources-box_header-title">{name}</div>
        <img src="./images/dots_black.svg" alt="merge dots" />
      </div>

      <div className="resources-box_content">{count}</div>
      <div className="resources-box_footer">+20%</div>
    </div>
  );
}
