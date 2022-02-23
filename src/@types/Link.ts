interface ILink {
  name: string;
  subLink?: ILink[];
  src?: string;
}

export default ILink;
