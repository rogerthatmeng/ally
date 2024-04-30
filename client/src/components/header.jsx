import { Link } from "react-router-dom";
import { IoIosHelpCircleOutline } from "react-icons/io";

const Header = () => {
  return (
    <div className="bg-[var(--primary)]">
      <div className="mx-auto w-full px-[15px] h-[71px] flex justify-between items-center max-w-[1177px] max-lg:max-w-[991px] max-md:max-w-[578px]">
        <Link
          to="/"
          className="grid place-items-center [&>svg]:max-md:hidden"
        >
          <svg
            role="img"
            width="58px"
            viewBox="0 0 58 32"
            rotate="0"
            class="sc-aXZVg kcsEbJ sc-gEvEer"
            aria-hidden="true"
          >
            <path
              d="M22.32 0h5.619v25.049h-5.619v-25.049zM30.623 0h5.619v25.049h-5.619v-25.049zM57.152 6.951l-9.41 25.049h-5.958l2.979-7.21-6.973-17.839h5.991l3.757 10.899h0.068l3.588-10.899h5.958zM19.758 16.085c0-4.237-3.022-9.19-9.315-9.19s-9.315 4.953-9.315 9.19c0 4.032 2.738 8.714 8.428 9.156l4.811-5.211h-3.828c-2.191 0-4.047-1.662-4.047-3.945s1.856-3.945 4.047-3.945 4.047 1.662 4.047 3.945c0 2.12 0 6.941 0 8.845h5.171c0-2.346 0-6.814 0-8.845z"
              fill="#FFFFFF"
            ></path>
          </svg>
        </Link>
        <Link
          to="/"
          className="grid place-items-center md:hidden"
        >
          <svg
            role="img"
            width="58px"
            viewBox="0 0 58 32"
            rotate="0"
            class="sc-aXZVg kcsEbJ sc-gEvEer"
            aria-hidden="true"
          >
            <path
              d="M22.32 0h5.619v25.049h-5.619v-25.049zM30.623 0h5.619v25.049h-5.619v-25.049zM57.152 6.951l-9.41 25.049h-5.958l2.979-7.21-6.973-17.839h5.991l3.757 10.899h0.068l3.588-10.899h5.958zM19.758 16.085c0-4.237-3.022-9.19-9.315-9.19s-9.315 4.953-9.315 9.19c0 4.032 2.738 8.714 8.428 9.156l4.811-5.211h-3.828c-2.191 0-4.047-1.662-4.047-3.945s1.856-3.945 4.047-3.945 4.047 1.662 4.047 3.945c0 2.12 0 6.941 0 8.845h5.171c0-2.346 0-6.814 0-8.845z"
              fill="#FFFFFF"
            ></path>
          </svg>
        </Link>
        <span className="text-white max-md:hidden text-sm font-medium">Help</span>
        <IoIosHelpCircleOutline
          fill="white"
          size={22}
          className="md:hidden"
        />
      </div>
    </div>
  );
};

export default Header;
