import React from 'react';
import SEO from '@/components/seo';
import Wrapper from '@/layout/wrapper';

import Header from "@/layout/headers/header";
import ElectronicCategory from "@/components/categories/electronic-category";
import HomeHeroSlider from "@/components/hero-banner/home-hero-slider";
import FeatureArea from "@/components/features/feature-area";
import ProductArea from "@/components/products/electronics/product-area";
import BannerArea from "@/components/banner/banner-area";
import OfferProducts from "@/components/products/electronics/offer-products";
import ProductGadgetArea from "@/components/products/electronics/product-gadget-area";
import ProductBanner from "@/components/products/electronics/product-banner";
import ProductSmArea from "@/components/products/electronics/product-sm-area";
import NewArrivals from "@/components/products/electronics/new-arrivals";
import BlogArea from "@/components/blog/electronic/blog-area";
import InstagramArea from "@/components/instagram/instagram-area";
import CtaArea from "@/components/cta/cta-area";
import Footer from "@/layout/footers/footer";

const HomeFour = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Home Four" />

      <Header/>
      <HomeHeroSlider/>
      <ElectronicCategory/>
      <FeatureArea/>
      <ProductArea/>
      <BannerArea/>
      <OfferProducts/>
      <ProductGadgetArea/>
      <ProductBanner/>
       <NewArrivals/>
      <ProductSmArea/>
      <BlogArea/>
      <InstagramArea/>
      <CtaArea/>
      <Footer/>
    </Wrapper>
  );
};

export default HomeFour;