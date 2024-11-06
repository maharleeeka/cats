import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  XIcon,
} from 'react-share';

const SocialShare = ({ url }: { url: string }) => {
  return (
    <div>
      <FacebookShareButton url={url}>
        <FacebookIcon size={28} round />
      </FacebookShareButton>
      <EmailShareButton url={url} className="mx-1">
        <EmailIcon size={28} round />
      </EmailShareButton>
      <TwitterShareButton url={url}>
        <XIcon size={28} round />
      </TwitterShareButton>
    </div>
  );
};

export default SocialShare;
