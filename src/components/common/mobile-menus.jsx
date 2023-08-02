import React,{useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { mobile_menu } from "@/data/menu-data";
import ProductItem from "../products/electronics/product-item";
import ErrorMsg from "./error-msg";
import { HomeNewArrivalPrdLoader } from "../loader";
import { useGetProductTypeQuery } from "@/redux/features/productApi";
// internal
import insta_1 from '@assets/img/instagram/4/instagram-1.jpg';
import insta_3 from '@assets/img/instagram/4/instagram-3.jpg';
import insta_4 from '@assets/img/instagram/4/instagram-4.jpg';
import insta_6 from '@assets/img/instagram/4/instagram-6.jpg';

// instagram data 
const instagram_data = [
  { id: 1, link: 'https://www.instagram.com/', img: insta_1 },
  { id: 2, link: 'https://www.instagram.com/', img: insta_3 },
  { id: 3, link: 'https://www.instagram.com/', img: insta_4 },
  { id: 4, link: 'https://www.instagram.com/', img: insta_6 },
]
const MobileMenus = () => {
  const [isActiveMenu,setIsActiveMenu] = useState("")

  const { data: products, isError, isLoading } = useGetProductTypeQuery({
    type: 'electronics',
    query: 'new=true'
  });
  
  // decide what to render
  let content = null;
  
  if (isLoading) {
    content = (
      <HomeNewArrivalPrdLoader loading={isLoading} />
    );
  }
  
  if (!isLoading && isError) {
    content = <ErrorMsg msg="There was an error" />;
  }
  
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  
  if (!isLoading && !isError && products?.data?.length > 0) {
    const product_items = products.data;
  
    content = (
      <div className="row">
        {product_items.slice(0, 4).map((item) => (
          <div key={item._id} className="col-md-3">
            <ProductItem product={item} />
          </div>
        ))}
      </div>
    );
  } else {
    // If there are no products or an error occurs, set content to an empty array
    content = [];
  }

  // handleOpenSubMenu
  const handleOpenSubMenu = (title) => {
    if(title === isActiveMenu){
      setIsActiveMenu("")
    }
    else {
      setIsActiveMenu(title)
    }
  }
  return (
    <>
      <nav className="tp-main-menu-content">
        {mobile_menu.map((menu, i) => (
          <ul key={i}>
            {menu.homes ? (
              <li className={`has-dropdown has-mega-menu ${isActiveMenu === menu.title ? 'dropdown-opened':''}`}>
                <a className={`${isActiveMenu === menu.title ? 'expanded':''}`}>
                  Home
                  <button onClick={()=> handleOpenSubMenu(menu.title)} className={`dropdown-toggle-btn ${isActiveMenu === menu.title ? 'dropdown-opened':''}`}>
                    <i className="fa-regular fa-angle-right"></i>
                  </button>
                </a>
                <div className={`home-menu tp-submenu tp-mega-menu ${isActiveMenu === menu.title ? 'active':''}`}>
                  <div className="row row-cols-1 row-cols-lg-4 row-cols-xl-5">
                  <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 gx-2 gy-2 gy-lg-0">
            {instagram_data.map((item, i) => (
              <div className="col" key={i}>
                <div className="tp-instagram-item-2 w-img">
                  <Image src={item.img} alt="instagram img" style={{ width: '100%', height: '100%' }} />
                  <div className="tp-instagram-icon-2">
                    <a href={item.link} target="_blank" className="popup-image">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
                    {menu.home_pages.map((home, i) => (
                      <div key={i} className="col">
                        <div className="home-menu-item">
                          {/* <Link href={home.link}>
                            <div className="home-menu-thumb p-relative fix">
                              <Image src={home.img} alt="home img" />
                            </div>
                            <div className="home-menu-content">
                              <h5 className="home-menu-title">{home.title}</h5>
                            </div>
                          </Link> */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            ) : menu.sub_menu ? (
              <li key={menu.id} className={`has-dropdown ${isActiveMenu === menu.title ? 'dropdown-opened':''}`}>
                <a className={`${isActiveMenu === menu.title ? 'expanded':''}`}>
                  {menu.title}
                  <button onClick={()=> handleOpenSubMenu(menu.title)} className={`dropdown-toggle-btn ${isActiveMenu === menu.title ? 'dropdown-opened':''}`}>
                    <i className="fa-regular fa-angle-right"></i>
                  </button>
                </a>
                <ul className={`tp-submenu ${isActiveMenu === menu.title ? 'active':''}`}>
                  {menu.sub_menus.map((b, i) => (
                    <li key={i}>
                      <Link href={b.link}>{b.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={menu.id}>
                <Link href={menu.link}>{menu.title}</Link>
              </li>
            )}
          </ul>
        ))}
      </nav>
    </>
  );
};

export default MobileMenus;
