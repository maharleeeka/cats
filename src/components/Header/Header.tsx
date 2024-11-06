import Logo from '@/assets/CatSnap.png';
import { APP_ROUTES } from '@/constants/route';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-center">
      <img
        src={Logo}
        className=" object-contain cursor-pointer"
        width={250}
        height={50}
        onClick={() => navigate(APP_ROUTES.ROOT)}
      />
    </div>
  );
};

export default Header;
