import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { getSearchImages } from "../../../services/searchImages.service";
import ImageGalery from "./ImageGalery";
import Loader from "../../../components/Loader/Loader";
import { numberGenerator } from "../../../utils/Number";

export default function ImageResults() {
  const params = useParams();

  const [images, setImages] = useState([]);
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);
  const [query, setQuery] = useState(params.q ?? "");
  const [currentPage, setCurrentPage] = useState(1);

  // const previousPageRef = useRef(currentPage);
  const loaderContainerRef = useRef(null);
  const observerRef = useRef(null);

  // useEffect(() => {
  //   if (previousPageRef.current !== currentPage) {
  //     console.log(
  //       "CurrentPage update current:",
  //       previousPageRef.current,
  //       "new:",
  //       currentPage
  //     );
  //   }
  // }, [currentPage]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting && setCurrentPage((prevValue) => prevValue + 1);
      });
    });
  }, []);

  useEffect(() => {
    images.length && setIsLoaderVisible(true);
  }, [images]);

  useEffect(() => {
    isLoaderVisible && observerRef.current.observe(loaderContainerRef.current);
  }, [isLoaderVisible]);

  useEffect(() => {
    if (params.q !== query) {
      setQuery(params.q);
      setImages([]);
      setCurrentPage(1);
    }
  }, [params]);

  useEffect(() => {
    async function getData() {
      const data = await getSearchImages(query, currentPage);

      const data2 = [
        {
          title:
            "Amazon.com: SAMSUNG Galaxy S24 Ultra 5G, US Version, 512GB ...",
          imageUrl:
            "https://m.media-amazon.com/images/I/71WcjsOVOmL._UF894,1000_QL80_.jpg",
          imageWidth: 894,
          imageHeight: 894,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpppR38gpwlubEvn6iNxo8Joqn9QPfIfqMLA&s",
          thumbnailWidth: 224,
          thumbnailHeight: 224,
          source: "Amazon.com",
          domain: "www.amazon.com",
          link: "https://www.amazon.com/SAMSUNG-Galaxy-Ultra-Version-Titanium/dp/B0D3264WQ8",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71WcjsOVOmL._UF894%2C1000_QL80_.jpg&tbnid=PX35un_XGgugGM&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FSAMSUNG-Galaxy-Ultra-Version-Titanium%2Fdp%2FB0D3264WQ8&docid=a8QmRsvdFc6SkM&w=894&h=894",
          position: 1,
        },
        {
          title: "Buy Galaxy S24 Verizon 128GB Smartphone | Samsung US",
          imageUrl:
            "https://image-us.samsung.com/SamsungUS/home/smartphones/galaxy-s24/gallery-images/FNL_Gallery_Base_800x600_Slide_Exclusive_Colors_1.jpg?$product-details-jpg$",
          imageWidth: 800,
          imageHeight: 600,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb7qjAnQXspd-QWkp0iehs3Gso84rGGnDRPA&s",
          thumbnailWidth: 259,
          thumbnailHeight: 194,
          source: "Samsung",
          domain: "www.samsung.com",
          link: "https://www.samsung.com/us/smartphones/galaxy-s24/buy/galaxy-s24-128gb-verizon-sm-s921uzaavzw/",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimage-us.samsung.com%2FSamsungUS%2Fhome%2Fsmartphones%2Fgalaxy-s24%2Fgallery-images%2FFNL_Gallery_Base_800x600_Slide_Exclusive_Colors_1.jpg%3F%24product-details-jpg%24&tbnid=RMxVe5TZupM-_M&imgrefurl=https%3A%2F%2Fwww.samsung.com%2Fus%2Fsmartphones%2Fgalaxy-s24%2Fbuy%2Fgalaxy-s24-128gb-verizon-sm-s921uzaavzw%2F&docid=uE87fvEzIP1T_M&w=800&h=600",
          position: 2,
        },
        {
          title:
            "New Samsung Galaxy S25 Ultra: Features, Price, Reviews | Verizon",
          imageUrl:
            "https://ss7.vzw.com/is/image/VerizonWireless/samsung-galaxy-s25-ultra-titanium-silver-blue?wid=224&hei=224&fmt=webp-alpha",
          imageWidth: 224,
          imageHeight: 224,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5MUi6VzM_MXHvl2-7utgCjOLBSwJArKrUUA&s",
          thumbnailWidth: 224,
          thumbnailHeight: 224,
          source: "Verizon",
          domain: "www.verizon.com",
          link: "https://www.verizon.com/smartphones/samsung-galaxy-s25-ultra/",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fss7.vzw.com%2Fis%2Fimage%2FVerizonWireless%2Fsamsung-galaxy-s25-ultra-titanium-silver-blue%3Fwid%3D224%26hei%3D224%26fmt%3Dwebp-alpha&tbnid=pBsk9KevL70J_M&imgrefurl=https%3A%2F%2Fwww.verizon.com%2Fsmartphones%2Fsamsung-galaxy-s25-ultra%2F&docid=PoJ_auz8rA8AGM&w=224&h=224",
          position: 3,
        },
        {
          title:
            "Amazon.com: Samsung Galaxy S22 Smartphone, Factory Unlocked ...",
          imageUrl: "https://m.media-amazon.com/images/I/61M4ndNetDL.jpg",
          imageWidth: 1000,
          imageHeight: 1000,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk4rTNQ7g5_jEYA4kAHLvJN-10SrKclBpReQ&s",
          thumbnailWidth: 225,
          thumbnailHeight: 225,
          source: "Amazon.com",
          domain: "www.amazon.com",
          link: "https://www.amazon.com/Samsung-Smartphone-Unlocked-Brightest-Processor/dp/B09V5LDZQ4",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61M4ndNetDL.jpg&tbnid=5fOxx0nFTMFQMM&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FSamsung-Smartphone-Unlocked-Brightest-Processor%2Fdp%2FB09V5LDZQ4&docid=Lkwdhro82uZSEM&w=1000&h=1000",
          position: 4,
        },
        {
          title: "Galaxy Smartphones | S25, Z Fold7, and more | Samsung Jordan",
          imageUrl:
            "https://images.samsung.com/is/image/samsung/p6pim/levant/2501/gallery/levant-galaxy-s25-s936-sm-s936bdbomea-thumb-544670828?$264_264_PNG$",
          imageWidth: 264,
          imageHeight: 264,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4QHUnyk2OWnaOaQ9oq2Tk4U8bk0xshTjlRQ&s",
          thumbnailWidth: 225,
          thumbnailHeight: 225,
          source: "Samsung",
          domain: "www.samsung.com",
          link: "https://www.samsung.com/levant/smartphones/",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.samsung.com%2Fis%2Fimage%2Fsamsung%2Fp6pim%2Flevant%2F2501%2Fgallery%2Flevant-galaxy-s25-s936-sm-s936bdbomea-thumb-544670828%3F%24264_264_PNG%24&tbnid=KI8AYQA3jN6lBM&imgrefurl=https%3A%2F%2Fwww.samsung.com%2Flevant%2Fsmartphones%2F&docid=7ihcdTyEXZvSQM&w=264&h=264",
          position: 5,
        },
        {
          title: "AT&T Unveils New Samsung Galaxy Lineup Powered by AT&T 5G",
          imageUrl:
            "https://about.att.com/ecms/dam/snr/2024/july/story-level-banner/samsung-unpacked-banner-850x500.jpg",
          imageWidth: 850,
          imageHeight: 500,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFKnwPIaiHQLxsVvVHTYGLwo6CBrfeD3a3A&s",
          thumbnailWidth: 293,
          thumbnailHeight: 172,
          source: "AT&T Newsroom",
          domain: "about.att.com",
          link: "https://about.att.com/story/2024/samsung-unpacked.html",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fabout.att.com%2Fecms%2Fdam%2Fsnr%2F2024%2Fjuly%2Fstory-level-banner%2Fsamsung-unpacked-banner-850x500.jpg&tbnid=NrNkT0b-fiBrIM&imgrefurl=https%3A%2F%2Fabout.att.com%2Fstory%2F2024%2Fsamsung-unpacked.html&docid=DVgv7bcrBE-Q0M&w=850&h=500",
          position: 6,
        },
        {
          title: "New Samsung Galaxy S25: Deals, Prices, Colors, Sizes & Specs",
          imageUrl:
            "https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/Samsung-Galaxy-S25/Icyblue/Samsung-Galaxy-S25-Icyblue-leftimage.png",
          imageWidth: 934,
          imageHeight: 1500,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1NEDheA25J9cW6uQO-pFhPWrecvBkue9RdA&s",
          thumbnailWidth: 177,
          thumbnailHeight: 285,
          source: "T-Mobile",
          domain: "www.t-mobile.com",
          link: "https://www.t-mobile.com/cell-phone/samsung-galaxy-s25",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.tmobile.com%2Fcontent%2Fdam%2Ft-mobile%2Fen-p%2Fcell-phones%2Fsamsung%2FSamsung-Galaxy-S25%2FIcyblue%2FSamsung-Galaxy-S25-Icyblue-leftimage.png&tbnid=Sx6BDXW6-mlEwM&imgrefurl=https%3A%2F%2Fwww.t-mobile.com%2Fcell-phone%2Fsamsung-galaxy-s25&docid=xRC87aLZFDPOFM&w=934&h=1500",
          position: 7,
        },
        {
          title: "New Samsung Galaxy S25+: Features, Price, Reviews | Verizon",
          imageUrl:
            "https://ss7.vzw.com/is/image/VerizonWireless/samsung-galaxy-s25-plus-navy?wid=224&hei=224&fmt=webp-alpha",
          imageWidth: 224,
          imageHeight: 224,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRxWd37AAeP6-o9PDOj7W92QTMSTnAV85Imw&s",
          thumbnailWidth: 224,
          thumbnailHeight: 224,
          source: "Verizon",
          domain: "www.verizon.com",
          link: "https://www.verizon.com/smartphones/samsung-galaxy-s25-plus/",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fss7.vzw.com%2Fis%2Fimage%2FVerizonWireless%2Fsamsung-galaxy-s25-plus-navy%3Fwid%3D224%26hei%3D224%26fmt%3Dwebp-alpha&tbnid=3xq6wkVDvkCf2M&imgrefurl=https%3A%2F%2Fwww.verizon.com%2Fsmartphones%2Fsamsung-galaxy-s25-plus%2F&docid=ggZGIFr3EUiOmM&w=224&h=224",
          position: 8,
        },
        {
          title: "Best Samsung phones in 2025 | Tom's Guide",
          imageUrl:
            "https://cdn.mos.cms.futurecdn.net/TXRyXNc3FuchdgTMqrwux4.jpg",
          imageWidth: 3840,
          imageHeight: 2160,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsKSXiH9XnFmRsMZzC0h1lAmIVKfKEnbPZZQ&s",
          thumbnailWidth: 300,
          thumbnailHeight: 168,
          source: "Tom's Guide",
          domain: "www.tomsguide.com",
          link: "https://www.tomsguide.com/best-picks/best-samsung-phone",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2FTXRyXNc3FuchdgTMqrwux4.jpg&tbnid=jDvlB9FuZKrd-M&imgrefurl=https%3A%2F%2Fwww.tomsguide.com%2Fbest-picks%2Fbest-samsung-phone&docid=1kX0gHsOqJTwXM&w=3840&h=2160",
          position: 9,
        },
        {
          title: "Samsung Galaxy - Wikipedia",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/7/73/Samsung_Galaxy_S25_Ultra_2025_%281%29.jpg",
          imageWidth: 6120,
          imageHeight: 8160,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ42Dxux-A_W1aX5oZAf2MhxgeO4E73JZLzrg&s",
          thumbnailWidth: 194,
          thumbnailHeight: 259,
          source: "Wikipedia, the free encyclopedia",
          domain: "en.wikipedia.org",
          link: "https://en.wikipedia.org/wiki/Samsung_Galaxy",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F7%2F73%2FSamsung_Galaxy_S25_Ultra_2025_%25281%2529.jpg&tbnid=FEID8kFJ006EtM&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSamsung_Galaxy&docid=ieuwGxuxe-xYrM&w=6120&h=8160",
          position: 10,
        },
        {
          title: "Amazon.com: SAMSUNG Galaxy A13 LTE, Factory Unlocked ...",
          imageUrl:
            "https://m.media-amazon.com/images/I/61IX+1qw35L._UF894,1000_QL80_.jpg",
          imageWidth: 894,
          imageHeight: 894,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuBCUR4z-H7YARSHqF599ZW9NuXMAyIf62dQ&s",
          thumbnailWidth: 224,
          thumbnailHeight: 224,
          source: "Amazon.com",
          domain: "www.amazon.com",
          link: "https://www.amazon.com/SAMSUNG-Galaxy-A13-LTE-32GB/dp/B09Z8P34NM",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61IX%2B1qw35L._UF894%2C1000_QL80_.jpg&tbnid=Tj6YM-EbZQBTFM&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FSAMSUNG-Galaxy-A13-LTE-32GB%2Fdp%2FB09Z8P34NM&docid=00TJk5fqaM_k8M&w=894&h=894",
          position: 11,
        },
        {
          title: "Samsung Galaxy A15 5G | 1 color in 128GB | Metro by T-Mobile",
          imageUrl:
            "https://t-mobile.scene7.com/is/image/Tmusprod/Samsung-Galaxy-A15-5G-Blue-Black-frontimage",
          imageWidth: 250,
          imageHeight: 400,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ14V1mUXTR5vx4zsTPYehWndAvL6oCsbRF4Q&s",
          thumbnailWidth: 177,
          thumbnailHeight: 284,
          source: "Metro by T-Mobile",
          domain: "www.metrobyt-mobile.com",
          link: "https://www.metrobyt-mobile.com/cell-phone/samsung-galaxy-a15-5g",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Ft-mobile.scene7.com%2Fis%2Fimage%2FTmusprod%2FSamsung-Galaxy-A15-5G-Blue-Black-frontimage&tbnid=hrXOUobrnnVReM&imgrefurl=https%3A%2F%2Fwww.metrobyt-mobile.com%2Fcell-phone%2Fsamsung-galaxy-a15-5g&docid=knVJXMDRDXAXiM&w=250&h=400",
          position: 12,
        },
        {
          title: "Samsung Galaxy S24 Ultra | Qualcomm",
          imageUrl:
            "https://s7d1.scene7.com/is/image/dmqualcommprod/galaxy-s24ultra-titaniumgray-device-spen-front?$QC_Responsive$&fmt=png-alpha",
          imageWidth: 580,
          imageHeight: 410,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQMVFprlD1eyPW7ND-iNCxqlmcKcQeeMG5Gg&s",
          thumbnailWidth: 267,
          thumbnailHeight: 189,
          source: "Qualcomm",
          domain: "www.qualcomm.com",
          link: "https://www.qualcomm.com/snapdragon/device-finder/samsung-galaxy-s24-ultra",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fs7d1.scene7.com%2Fis%2Fimage%2Fdmqualcommprod%2Fgalaxy-s24ultra-titaniumgray-device-spen-front%3F%24QC_Responsive%24%26fmt%3Dpng-alpha&tbnid=c81SSoWOI8WGzM&imgrefurl=https%3A%2F%2Fwww.qualcomm.com%2Fsnapdragon%2Fdevice-finder%2Fsamsung-galaxy-s24-ultra&docid=dcc56Xn2TVB5iM&w=580&h=410",
          position: 13,
        },
        {
          title: "Newest Samsung Galaxy Phones, Watches, & Tablets | AT&T",
          imageUrl:
            "https://www.att.com/scmsassets/upper_funnel/wireless/4510801-multi-tile-edge-retina.png",
          imageWidth: 800,
          imageHeight: 500,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIMwmfwf9tSz-t9Ic8k4i73S2v0M_tXZto1g&s",
          thumbnailWidth: 284,
          thumbnailHeight: 177,
          source: "AT&T",
          domain: "www.att.com",
          link: "https://www.att.com/brand/samsung/",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.att.com%2Fscmsassets%2Fupper_funnel%2Fwireless%2F4510801-multi-tile-edge-retina.png&tbnid=JlR2rsJWUrLBHM&imgrefurl=https%3A%2F%2Fwww.att.com%2Fbrand%2Fsamsung%2F&docid=XSvjR4mLoTWX0M&w=800&h=500",
          position: 14,
        },
        {
          title: "Samsung Galaxy A15 5G - Mint Mobile",
          imageUrl:
            "https://phones.mintmobile.com/wp-content/uploads/2024/02/Samsung_Galaxy_A15_front1.png",
          imageWidth: 600,
          imageHeight: 600,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkkp5JOqJO4yhnCUPYN5-dB6nzzkmyVYSA-A&s",
          thumbnailWidth: 225,
          thumbnailHeight: 225,
          source: "Mint Mobile",
          domain: "phones.mintmobile.com",
          link: "https://phones.mintmobile.com/product/samsung-galaxy-a15-5g/",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fphones.mintmobile.com%2Fwp-content%2Fuploads%2F2024%2F02%2FSamsung_Galaxy_A15_front1.png&tbnid=9UhO02JKzs4WHM&imgrefurl=https%3A%2F%2Fphones.mintmobile.com%2Fproduct%2Fsamsung-galaxy-a15-5g%2F&docid=Zfdfvks9OGlIHM&w=600&h=600",
          position: 15,
        },
        {
          title: "All Smartphones - Latest Android Mobile Phones | Samsung ...",
          imageUrl:
            "https://images.samsung.com/is/image/samsung/p6pim/latin_en/sm-a566eliagto/gallery/latin-en-galaxy-a56-5g-sm-a566-sm-a566eliagto-thumb-545594779?$UX_EXT2_PNG$",
          imageWidth: 560,
          imageHeight: 560,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Hcout_QgJfN-w0lasbsaaN-NEE4gAKBh7g&s",
          thumbnailWidth: 224,
          thumbnailHeight: 224,
          source: "Samsung",
          domain: "www.samsung.com",
          link: "https://www.samsung.com/latin_en/smartphones/all-smartphones/",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.samsung.com%2Fis%2Fimage%2Fsamsung%2Fp6pim%2Flatin_en%2Fsm-a566eliagto%2Fgallery%2Flatin-en-galaxy-a56-5g-sm-a566-sm-a566eliagto-thumb-545594779%3F%24UX_EXT2_PNG%24&tbnid=XPmoXMhneDxF_M&imgrefurl=https%3A%2F%2Fwww.samsung.com%2Flatin_en%2Fsmartphones%2Fall-smartphones%2F&docid=OaeLNJVd9WnTpM&w=560&h=560",
          position: 16,
        },
        {
          title: "Samsung Galaxy Cell Phones: New Galaxy Phones - Best Buy",
          imageUrl:
            "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pm1-REF-3445114-1-sm-250825_DER-43a8bd81-07cf-4203-b70b-b196222ba063.jpg;maxHeight=350;maxWidth=1000?format=webp",
          imageWidth: 1000,
          imageHeight: 350,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdVselZNkUWZ4XkmVpJwWT8a-NSVf7w-iARQ&s",
          thumbnailWidth: 380,
          thumbnailHeight: 133,
          source: "Best Buy",
          domain: "www.bestbuy.com",
          link: "https://www.bestbuy.com/site/mobile-cell-phones/samsung-galaxy/pcmcat305200050001.c?id=pcmcat305200050001",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpisces.bbystatic.com%2Fimage2%2FBestBuy_US%2Fdam%2Fpm1-REF-3445114-1-sm-250825_DER-43a8bd81-07cf-4203-b70b-b196222ba063.jpg%3BmaxHeight%3D350%3BmaxWidth%3D1000%3Fformat%3Dwebp&tbnid=9e4qa2C71H1qQM&imgrefurl=https%3A%2F%2Fwww.bestbuy.com%2Fsite%2Fmobile-cell-phones%2Fsamsung-galaxy%2Fpcmcat305200050001.c%3Fid%3Dpcmcat305200050001&docid=QG07uUvrM5sCpM&w=1000&h=350",
          position: 17,
        },
        {
          title:
            "The 6 Best Samsung Phones of 2025 - Latest Samsung Galaxy ...",
          imageUrl:
            "https://vader-prod.s3.amazonaws.com/1738252275-galaxy-s24-fe-001-679b9fd18c58a.jpg",
          imageWidth: 2395,
          imageHeight: 2394,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzPNu2r8tCWeLD074VO47pbOgnvEggJhZW3A&s",
          thumbnailWidth: 225,
          thumbnailHeight: 224,
          source: "Best Products",
          domain: "www.bestproducts.com",
          link: "https://www.bestproducts.com/tech/electronics/g158/best-samsung-phones-and-smartphones/",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fvader-prod.s3.amazonaws.com%2F1738252275-galaxy-s24-fe-001-679b9fd18c58a.jpg&tbnid=XQxfspuAcnjqRM&imgrefurl=https%3A%2F%2Fwww.bestproducts.com%2Ftech%2Felectronics%2Fg158%2Fbest-samsung-phones-and-smartphones%2F&docid=LXYKo2WZq9TomM&w=2395&h=2394",
          position: 18,
        },
        {
          title:
            "🌟🌟SAMSUNG GALAXY S10 SM-G973U1 FACTORY UNLOCKED SMARTPHONE🌟🌟",
          imageUrl:
            "https://i.ebayimg.com/images/g/YNQAAOSwAepd~mow/s-l1200.jpg",
          imageWidth: 710,
          imageHeight: 645,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68nMQ0rxgt2KJul0oosDktcuk4v3MOI0ohw&s",
          thumbnailWidth: 236,
          thumbnailHeight: 214,
          source: "eBay",
          domain: "www.ebay.com",
          link: "https://www.ebay.com/itm/274162626155",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fg%2FYNQAAOSwAepd~mow%2Fs-l1200.jpg&tbnid=7_5-4iIhVh7kIM&imgrefurl=https%3A%2F%2Fwww.ebay.com%2Fitm%2F274162626155&docid=wHHmlK7bqGYhWM&w=710&h=645",
          position: 19,
        },
        {
          title: "Samsung Galaxy S24 Ultra: Colors, Price, Reviews | Verizon",
          imageUrl:
            "https://ss7.vzw.com/is/image/VerizonWireless/samsung-eureka-e3-titaniumgray?wid=224&hei=224&fmt=webp-alpha",
          imageWidth: 224,
          imageHeight: 224,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyibD2bDnccKIuwmf0Hw0fpEbH9JTf4xyYg&s",
          thumbnailWidth: 224,
          thumbnailHeight: 224,
          source: "Verizon",
          domain: "www.verizon.com",
          link: "https://www.verizon.com/smartphones/samsung-galaxy-s24-ultra/",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fss7.vzw.com%2Fis%2Fimage%2FVerizonWireless%2Fsamsung-eureka-e3-titaniumgray%3Fwid%3D224%26hei%3D224%26fmt%3Dwebp-alpha&tbnid=aZ21mG32_xZP5M&imgrefurl=https%3A%2F%2Fwww.verizon.com%2Fsmartphones%2Fsamsung-galaxy-s24-ultra%2F&docid=lXdxG2DAkO4VQM&w=224&h=224",
          position: 20,
        },
        {
          title: "Consumer Cellular, Samsung Galaxy A15 5G",
          imageUrl:
            "https://i5.walmartimages.com/seo/Consumer-Cellular-Samsung-Galaxy-A15-5G_5a284026-f1d7-4f51-bb76-8f2d18c10191.6640020f91bc5fe4be20eedaf993a3d7.jpeg",
          imageWidth: 1692,
          imageHeight: 3378,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwD43LZQZ8AcyDlaMvCtoq585mNl-b1JcmBA&s",
          thumbnailWidth: 159,
          thumbnailHeight: 317,
          source: "Walmart",
          domain: "www.walmart.com",
          link: "https://www.walmart.com/ip/Consumer-Cellular-Samsung-Galaxy-A15-5G/5416414691",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi5.walmartimages.com%2Fseo%2FConsumer-Cellular-Samsung-Galaxy-A15-5G_5a284026-f1d7-4f51-bb76-8f2d18c10191.6640020f91bc5fe4be20eedaf993a3d7.jpeg&tbnid=zgyH8UaiDSADfM&imgrefurl=https%3A%2F%2Fwww.walmart.com%2Fip%2FConsumer-Cellular-Samsung-Galaxy-A15-5G%2F5416414691&docid=H0W3qjPd3h9ELM&w=1692&h=3378",
          position: 21,
        },
        {
          title: "Samsung Galaxy S24, Galaxy S24+, Galaxy S24 Ultra: Specs ...",
          imageUrl:
            "https://media.wired.com/photos/65a6c0640c15f050104f7819/3:2/w_2560%2Cc_limit/Gear-Samsung-Galaxy-S24-Ultra-SOURCE-Julian-Chokkattu.jpg",
          imageWidth: 2400,
          imageHeight: 1600,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6o00O7Qnga3hbCtUWUzK1eMf3z_kG8XlzMw&s",
          thumbnailWidth: 275,
          thumbnailHeight: 183,
          source: "WIRED",
          domain: "www.wired.com",
          link: "https://www.wired.com/story/samsung-galaxy-unpacked-2024/",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.wired.com%2Fphotos%2F65a6c0640c15f050104f7819%2F3%3A2%2Fw_2560%252Cc_limit%2FGear-Samsung-Galaxy-S24-Ultra-SOURCE-Julian-Chokkattu.jpg&tbnid=AIQKfQK_q6Ki5M&imgrefurl=https%3A%2F%2Fwww.wired.com%2Fstory%2Fsamsung-galaxy-unpacked-2024%2F&docid=KqIUNoo_BFex_M&w=2400&h=1600",
          position: 22,
        },
        {
          title: "Samsung Galaxy S24 | Qualcomm",
          imageUrl:
            "https://s7d1.scene7.com/is/image/dmqualcommprod/samsung-galaxy-s24-1?$QC_Responsive$&fmt=png-alpha",
          imageWidth: 580,
          imageHeight: 410,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDzH08IUSrRVGuMvKPjkJjZocXXYJzyftFxQ&s",
          thumbnailWidth: 267,
          thumbnailHeight: 189,
          source: "Qualcomm",
          domain: "www.qualcomm.com",
          link: "https://www.qualcomm.com/snapdragon/device-finder/samsung-galaxy-s24",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fs7d1.scene7.com%2Fis%2Fimage%2Fdmqualcommprod%2Fsamsung-galaxy-s24-1%3F%24QC_Responsive%24%26fmt%3Dpng-alpha&tbnid=JL4klNE-mVlJTM&imgrefurl=https%3A%2F%2Fwww.qualcomm.com%2Fsnapdragon%2Fdevice-finder%2Fsamsung-galaxy-s24&docid=NWlSFb9RPyLmDM&w=580&h=410",
          position: 23,
        },
        {
          title:
            "New Samsung Galaxy S25 Ultra: Deals, Prices, Colors, Sizes ...",
          imageUrl:
            "https://t-mobile.scene7.com/is/image/Tmusprod/Samsung-Galaxy-S25-Ultra-Titanium-Silverblue-backimage",
          imageWidth: 250,
          imageHeight: 400,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7-kciM532ZsPRESdOtI8UAtvxfZmYLqJIsQ&s",
          thumbnailWidth: 177,
          thumbnailHeight: 284,
          source: "T-Mobile",
          domain: "www.t-mobile.com",
          link: "https://www.t-mobile.com/cell-phone/samsung-galaxy-s25-ultra",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Ft-mobile.scene7.com%2Fis%2Fimage%2FTmusprod%2FSamsung-Galaxy-S25-Ultra-Titanium-Silverblue-backimage&tbnid=rPCfasXjgrx1xM&imgrefurl=https%3A%2F%2Fwww.t-mobile.com%2Fcell-phone%2Fsamsung-galaxy-s25-ultra&docid=Pi5CKPMxlCsaHM&w=250&h=400",
          position: 24,
        },
        {
          title: "Samsung Galaxy S6 - Wikipedia",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/8/86/Samsung_Galaxy_S6_S6_Edge_and_S6_Edge_Plus.png",
          imageWidth: 1178,
          imageHeight: 834,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFeWjOyMqzuv9Z973MXraX1u3eIzVnKMq-A&s",
          thumbnailWidth: 267,
          thumbnailHeight: 189,
          source: "en.wikipedia.org",
          domain: "en.wikipedia.org",
          link: "https://en.wikipedia.org/wiki/Samsung_Galaxy_S6",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F86%2FSamsung_Galaxy_S6_S6_Edge_and_S6_Edge_Plus.png&tbnid=Wp3wLza_Kwy2AM&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSamsung_Galaxy_S6&docid=LTdfA0PHd6BHUM&w=1178&h=834",
          position: 25,
        },
        {
          title: "Samsung - YouTube",
          imageUrl:
            "https://yt3.googleusercontent.com/Ul4xFDiUAHZT1h8P7dDrNpW5RrVqff3b0-yKgZxSgn6QLXzkOJSmJnYsZS7l2L5LcfXXN7o-kw=s900-c-k-c0x00ffffff-no-rj",
          imageWidth: 900,
          imageHeight: 900,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFQcQKgC68nypn44AKZai15vN97bRpqjAiKg&s",
          thumbnailWidth: 225,
          thumbnailHeight: 225,
          source: "YouTube",
          domain: "www.youtube.com",
          link: "https://www.youtube.com/samsung",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fyt3.googleusercontent.com%2FUl4xFDiUAHZT1h8P7dDrNpW5RrVqff3b0-yKgZxSgn6QLXzkOJSmJnYsZS7l2L5LcfXXN7o-kw%3Ds900-c-k-c0x00ffffff-no-rj&tbnid=2l9w2K471KfRGM&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fsamsung&docid=aSvhA50r5-Pz4M&w=900&h=900",
          position: 26,
        },
        {
          title: "Galaxy S23 Ultra– Samsung Mobile Press",
          imageUrl:
            "https://www.samsungmobilepress.com/file/2792F942A2A2123F030173931A3506693F1F0BF39CEB5BE58D55446CD8A4364370FB854B08F831A146DFC151E3EB85BD8FEC67F402DCF6AFAA1FE4058A429DED12142A032AAB1FCE138FD0078B104B95AAC1A7927213C22AA6D6D29ADDAF39519F70B87AF6816CAF2ECBFD1C19622FD5AD8804802C5FA1D782529E70C3ADE1D5",
          imageWidth: 800,
          imageHeight: 533,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzdkUg5VJIA375c59SRpb4Kk0HhzcTUvyqOA&s",
          thumbnailWidth: 275,
          thumbnailHeight: 183,
          source: "Samsung Mobile Press",
          domain: "www.samsungmobilepress.com",
          link: "https://www.samsungmobilepress.com/media-assets/galaxy-s23-ultra?tab=specs",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.samsungmobilepress.com%2Ffile%2F2792F942A2A2123F030173931A3506693F1F0BF39CEB5BE58D55446CD8A4364370FB854B08F831A146DFC151E3EB85BD8FEC67F402DCF6AFAA1FE4058A429DED12142A032AAB1FCE138FD0078B104B95AAC1A7927213C22AA6D6D29ADDAF39519F70B87AF6816CAF2ECBFD1C19622FD5AD8804802C5FA1D782529E70C3ADE1D5&tbnid=3n-lCl9ZySPsDM&imgrefurl=https%3A%2F%2Fwww.samsungmobilepress.com%2Fmedia-assets%2Fgalaxy-s23-ultra%3Ftab%3Dspecs&docid=kz777A-ABJ1izM&w=800&h=533",
          position: 27,
        },
        {
          title: "The Great Samsung Galaxy Phones That Nobody Can Buy",
          imageUrl:
            "https://imageio.forbes.com/specials-images/imageserve/5f4cf05c15e22181e7546abb/Samsung-Galaxy-M51/960x0.png?format=png&width=960",
          imageWidth: 959,
          imageHeight: 595,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAVHNklYB8_Sui9DNtRniiXeB4qZ_-W7K0xg&s",
          thumbnailWidth: 285,
          thumbnailHeight: 177,
          source: "Forbes",
          domain: "www.forbes.com",
          link: "https://www.forbes.com/sites/barrycollins/2021/07/04/the-great-samsung-galaxy-phones-that-nobody-can-buy/",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimageio.forbes.com%2Fspecials-images%2Fimageserve%2F5f4cf05c15e22181e7546abb%2FSamsung-Galaxy-M51%2F960x0.png%3Fformat%3Dpng%26width%3D960&tbnid=5ftZ1BvVCNeuLM&imgrefurl=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fbarrycollins%2F2021%2F07%2F04%2Fthe-great-samsung-galaxy-phones-that-nobody-can-buy%2F&docid=nHESKrjcggm1jM&w=959&h=595",
          position: 28,
        },
        {
          title: "Amazon.com: Samsung Galaxy A53 5G A Series Cell Phone ...",
          imageUrl:
            "https://m.media-amazon.com/images/I/61uAwNHHgaL._UF894,1000_QL80_.jpg",
          imageWidth: 894,
          imageHeight: 894,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrF7Xe9sMPRjNOPaCnaOsULJoL7j8wagA5mg&s",
          thumbnailWidth: 224,
          thumbnailHeight: 224,
          source: "Amazon.com",
          domain: "www.amazon.com",
          link: "https://www.amazon.com/SAMSUNG-Smartphone-Unlocked-Android-Battery/dp/B09XP9FX25",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61uAwNHHgaL._UF894%2C1000_QL80_.jpg&tbnid=Ui6-qKAANIR5AM&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FSAMSUNG-Smartphone-Unlocked-Android-Battery%2Fdp%2FB09XP9FX25&docid=Lqy0Rvz16iONPM&w=894&h=894",
          position: 29,
        },
        {
          title: "Samsung Galaxy Z Flip6 | Plan, price, colour | Videotron",
          imageUrl:
            "https://www.videotron.com/sites/default/files/styles/cropped_small/public/image/samsunggalaxyzflip6_bleu_01_vue_de_face_pliee_et_de_dos_m1.png?itok=aham5CRI",
          imageWidth: 750,
          imageHeight: 750,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReMZUqgQbXoPeF2meAVSQjsskub2biaHsgcg&s",
          thumbnailWidth: 225,
          thumbnailHeight: 225,
          source: "www.videotron.com",
          domain: "www.videotron.com",
          link: "https://www.videotron.com/en/mobile/cell-phones/samsung/galaxy-z-flip6?srsltid=AfmBOorEyVf-K0KSVLR9-C6wODzhdiARd6bW7zVzTlu4H3wEM0SfFAcL",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.videotron.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fcropped_small%2Fpublic%2Fimage%2Fsamsunggalaxyzflip6_bleu_01_vue_de_face_pliee_et_de_dos_m1.png%3Fitok%3Daham5CRI&tbnid=b5U3c7CqcoGbzM&imgrefurl=https%3A%2F%2Fwww.videotron.com%2Fen%2Fmobile%2Fcell-phones%2Fsamsung%2Fgalaxy-z-flip6%3Fsrsltid%3DAfmBOorEyVf-K0KSVLR9-C6wODzhdiARd6bW7zVzTlu4H3wEM0SfFAcL&docid=Klpt5O67QdXp0M&w=750&h=750",
          position: 30,
        },
        {
          title: "Which Samsung Galaxy S24 Model Should You Buy? Specs ...",
          imageUrl:
            "https://media.wired.com/photos/65a6c0643d4e31ae36fab6d9/16:9/w_2400,h_1350,c_limit/Gear-Samsung-Galaxy-S24-Series-SOURCE-Julian-Chokkattu.jpg",
          imageWidth: 2400,
          imageHeight: 1350,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp7UmCJHBLfPGOBiC01e-HDHx7JG9NfVNslA&s",
          thumbnailWidth: 300,
          thumbnailHeight: 168,
          source: "WIRED",
          domain: "www.wired.com",
          link: "https://www.wired.com/story/which-samsung-galaxy-s24-model-to-buy/",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.wired.com%2Fphotos%2F65a6c0643d4e31ae36fab6d9%2F16%3A9%2Fw_2400%2Ch_1350%2Cc_limit%2FGear-Samsung-Galaxy-S24-Series-SOURCE-Julian-Chokkattu.jpg&tbnid=s94Te3PZlslEtM&imgrefurl=https%3A%2F%2Fwww.wired.com%2Fstory%2Fwhich-samsung-galaxy-s24-model-to-buy%2F&docid=kvt0Rk1WLRGH-M&w=2400&h=1350",
          position: 31,
        },
        {
          title: "Best Samsung phones in 2025 | Tom's Guide",
          imageUrl:
            "https://cdn.mos.cms.futurecdn.net/ZJZztnnZP9y8GYLvnKc6SH.jpg",
          imageWidth: 600,
          imageHeight: 600,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK1Q2-x-o-_tbv3KrdN2b3kjEr6439gF6i7A&s",
          thumbnailWidth: 225,
          thumbnailHeight: 225,
          source: "Tom's Guide",
          domain: "www.tomsguide.com",
          link: "https://www.tomsguide.com/best-picks/best-samsung-phone",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2FZJZztnnZP9y8GYLvnKc6SH.jpg&tbnid=xfrfEF1y4fWnbM&imgrefurl=https%3A%2F%2Fwww.tomsguide.com%2Fbest-picks%2Fbest-samsung-phone&docid=1kX0gHsOqJTwXM&w=600&h=600",
          position: 32,
        },
        {
          title:
            "Samsung Phones | Compare Models, Prices & More | Metro by T ...",
          imageUrl:
            "https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/samsung/Samsung-Galaxy-A16-5G/Blue-Black/Samsung-Galaxy-A16-5G-Blue-Black-thumbnail.png",
          imageWidth: 274,
          imageHeight: 440,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeqcS0d6JY2jYpeYizC2t-FCVRRhaMSrQLYw&s",
          thumbnailWidth: 177,
          thumbnailHeight: 285,
          source: "Metro by T-Mobile",
          domain: "www.metrobyt-mobile.com",
          link: "https://www.metrobyt-mobile.com/cell-phones/brand/samsung",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.tmobile.com%2Fcontent%2Fdam%2Ft-mobile%2Fen-p%2Fcell-phones%2Fsamsung%2FSamsung-Galaxy-A16-5G%2FBlue-Black%2FSamsung-Galaxy-A16-5G-Blue-Black-thumbnail.png&tbnid=xmmGg1VLzq3aDM&imgrefurl=https%3A%2F%2Fwww.metrobyt-mobile.com%2Fcell-phones%2Fbrand%2Fsamsung&docid=l1FA67lKaDkHyM&w=274&h=440",
          copyright:
            "Only for the promotion of the device featured in the asset.",
          position: 33,
        },
        {
          title: "Samsung Galaxy - Wikimedia Commons",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/2/2e/Samsung_Galaxy_Z_smartphone.jpg",
          imageWidth: 7136,
          imageHeight: 5360,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYvplECy3gYCCNe11sBYPKSRfY1fuYpu8JQ&s",
          thumbnailWidth: 259,
          thumbnailHeight: 195,
          source: "Wikimedia Commons",
          domain: "commons.wikimedia.org",
          link: "https://commons.wikimedia.org/wiki/Samsung_Galaxy",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F2%2F2e%2FSamsung_Galaxy_Z_smartphone.jpg&tbnid=Ikhn5BYWOUpr8M&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FSamsung_Galaxy&docid=ctPmSEamR_mUxM&w=7136&h=5360",
          position: 34,
        },
        {
          title: "The best Samsung phones 2025: top Galaxy handsets ranked ...",
          imageUrl:
            "https://cdn.mos.cms.futurecdn.net/f8kXjpvbWjNH8JfuSJscsU.jpg",
          imageWidth: 2000,
          imageHeight: 1125,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-Jxz9xAOYOUJevtyv7Ul5IxV1UQkPvaMrQ&s",
          thumbnailWidth: 300,
          thumbnailHeight: 168,
          source: "TechRadar",
          domain: "www.techradar.com",
          link: "https://www.techradar.com/news/best-samsung-phones",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2Ff8kXjpvbWjNH8JfuSJscsU.jpg&tbnid=33nS6OQJH_z3ZM&imgrefurl=https%3A%2F%2Fwww.techradar.com%2Fnews%2Fbest-samsung-phones&docid=6Iq9LJgWxiIKkM&w=2000&h=1125",
          position: 35,
        },
        {
          title:
            "The Best Samsung Phones Reviewed 2021: Galaxy Ultra vs. Note ...",
          imageUrl:
            "https://www.rollingstone.com/wp-content/uploads/2020/10/f75bf25a-4f11-4921-a353-4a0db1233dbf.__CR0251464600_PT0_SX1464_V1___-e1602100192407.jpg?w=995&h=592&crop=1",
          imageWidth: 995,
          imageHeight: 592,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5BgQt8w4XYyNK2tgfKO-6rw-qyDG-n5A6A&s",
          thumbnailWidth: 291,
          thumbnailHeight: 173,
          source: "Rolling Stone",
          domain: "www.rollingstone.com",
          link: "https://www.rollingstone.com/product-recommendations/electronics/best-samsung-phone-reviews-1143171/",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.rollingstone.com%2Fwp-content%2Fuploads%2F2020%2F10%2Ff75bf25a-4f11-4921-a353-4a0db1233dbf.__CR0251464600_PT0_SX1464_V1___-e1602100192407.jpg%3Fw%3D995%26h%3D592%26crop%3D1&tbnid=w8TZenWKoKvOnM&imgrefurl=https%3A%2F%2Fwww.rollingstone.com%2Fproduct-recommendations%2Felectronics%2Fbest-samsung-phone-reviews-1143171%2F&docid=ts2fQ3SCv0fjSM&w=995&h=592",
          position: 36,
        },
        {
          title: "Here's every Galaxy S phone since 2010 - CNET",
          imageUrl:
            "https://www.cnet.com/a/img/resize/7eadd59e549333fd6fef61a0f98fb38039803e6c/2017/03/31/ffc61ff8-783f-4b28-8fbd-2cd5113c0eee/samsung-galaxy-s8-historia-cnet-garzon.jpg?auto=webp",
          imageWidth: 1300,
          imageHeight: 800,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdDQYl5puvFTBsI3mE4vUXMf2srr-RnFQJOg&s",
          thumbnailWidth: 286,
          thumbnailHeight: 176,
          source: "CNET",
          domain: "www.cnet.com",
          link: "https://www.cnet.com/pictures/evolution-history-samsung-galaxy-phones/",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.cnet.com%2Fa%2Fimg%2Fresize%2F7eadd59e549333fd6fef61a0f98fb38039803e6c%2F2017%2F03%2F31%2Fffc61ff8-783f-4b28-8fbd-2cd5113c0eee%2Fsamsung-galaxy-s8-historia-cnet-garzon.jpg%3Fauto%3Dwebp&tbnid=0flNk63HbVRd-M&imgrefurl=https%3A%2F%2Fwww.cnet.com%2Fpictures%2Fevolution-history-samsung-galaxy-phones%2F&docid=T_j_UXabaCavFM&w=1300&h=800",
          position: 37,
        },
        {
          title: "SAMSUNG Galaxy F05 (Twilight Blue, 64 GB) (4 GB RAM)",
          imageUrl:
            "https://rukminim2.flixcart.com/image/704/844/xif0q/mobile/e/r/f/-original-imah56hkgehywn5b.jpeg?q=90&crop=false",
          imageWidth: 657,
          imageHeight: 844,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1u99eeHX7bVuTgQIBP7p0uoFlyKQ_Qcn4wA&s",
          thumbnailWidth: 198,
          thumbnailHeight: 255,
          source: "Flipkart",
          domain: "www.flipkart.com",
          link: "https://www.flipkart.com/samsung-galaxy-f05-twilight-blue-64-gb/p/itm84a914081ab93",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Frukminim2.flixcart.com%2Fimage%2F704%2F844%2Fxif0q%2Fmobile%2Fe%2Fr%2Ff%2F-original-imah56hkgehywn5b.jpeg%3Fq%3D90%26crop%3Dfalse&tbnid=3kvlLemlGu3JLM&imgrefurl=https%3A%2F%2Fwww.flipkart.com%2Fsamsung-galaxy-f05-twilight-blue-64-gb%2Fp%2Fitm84a914081ab93&docid=LVSqmZtefp1jDM&w=657&h=844",
          position: 38,
        },
        {
          title: "Jual Samsung Galaxy A05 4/64GB Garansi Resmi di Bali ...",
          imageUrl:
            "https://cworld.id/wp-content/uploads/2023/10/Screenshot_35.jpg",
          imageWidth: 401,
          imageHeight: 363,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcS-iTziRh58OB2jlCebQlSpDvM_23BO-Y8A&s",
          thumbnailWidth: 236,
          thumbnailHeight: 214,
          source: "cellular world",
          domain: "cworld.id",
          link: "https://cworld.id/product/samsung-galaxy-a05-4-64gb/",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcworld.id%2Fwp-content%2Fuploads%2F2023%2F10%2FScreenshot_35.jpg&tbnid=4ZyQ_GKSM_MhAM&imgrefurl=https%3A%2F%2Fcworld.id%2Fproduct%2Fsamsung-galaxy-a05-4-64gb%2F&docid=GyetDbsAymvGQM&w=401&h=363",
          position: 39,
        },
        {
          title:
            "The 6 Best Samsung Phones of 2025 - Latest Samsung Galaxy ...",
          imageUrl:
            "https://vader-prod.s3.amazonaws.com/1738252498-samsung-galaxy-z-fold-6-006-679ba0c7c43be.jpg",
          imageWidth: 1487,
          imageHeight: 1487,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV_c2HUrOXFEl8gsbNcb9k6PBBaQzhT3X8yQ&s",
          thumbnailWidth: 225,
          thumbnailHeight: 225,
          source: "Best Products",
          domain: "www.bestproducts.com",
          link: "https://www.bestproducts.com/tech/electronics/g158/best-samsung-phones-and-smartphones/",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fvader-prod.s3.amazonaws.com%2F1738252498-samsung-galaxy-z-fold-6-006-679ba0c7c43be.jpg&tbnid=MbUFGXGvEX1VfM&imgrefurl=https%3A%2F%2Fwww.bestproducts.com%2Ftech%2Felectronics%2Fg158%2Fbest-samsung-phones-and-smartphones%2F&docid=LXYKo2WZq9TomM&w=1487&h=1487",
          position: 40,
        },
        {
          title:
            "Samsung Galaxy A06 64/128 BREAK FREE OFFER (01YEAR) – Sri ...",
          imageUrl: "https://dialcom.lk/wp-content/uploads/a06-edii.jpg",
          imageWidth: 2000,
          imageHeight: 2000,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM29fx4VhJB1UkYiheCNTPwKXpJLHhZj1GxA&s",
          thumbnailWidth: 225,
          thumbnailHeight: 225,
          source: "Dialcom",
          domain: "dialcom.lk",
          link: "https://dialcom.lk/product/samsung-galaxy-a06-new/",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fdialcom.lk%2Fwp-content%2Fuploads%2Fa06-edii.jpg&tbnid=6MKFHV0QT55-UM&imgrefurl=https%3A%2F%2Fdialcom.lk%2Fproduct%2Fsamsung-galaxy-a06-new%2F&docid=h8YhDmfCIUfhTM&w=2000&h=2000",
          position: 41,
        },
        {
          title: "Buy latest samsung smartphones and feature phone at best ...",
          imageUrl:
            "https://www.top10mobileshop.com/images/top10mobiles.com/thumbnail/product/2024/08/250607926202408060926.jpg",
          imageWidth: 1500,
          imageHeight: 1500,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHzLMe1BDFT1vqrTAXM68qMFVO0s07iKXyg&s",
          thumbnailWidth: 225,
          thumbnailHeight: 225,
          source: "top10mobiles.com",
          domain: "top10mobiles.com",
          link: "https://top10mobiles.com/brands/Samsung?srsltid=AfmBOorxbqjZ073x1E10aqzaBgj9FHC5zhJ3JlTiwCM5EKzwriVGtg6R",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.top10mobileshop.com%2Fimages%2Ftop10mobiles.com%2Fthumbnail%2Fproduct%2F2024%2F08%2F250607926202408060926.jpg&tbnid=c_UDTHQnLdgoRM&imgrefurl=https%3A%2F%2Ftop10mobiles.com%2Fbrands%2FSamsung%3Fsrsltid%3DAfmBOorxbqjZ073x1E10aqzaBgj9FHC5zhJ3JlTiwCM5EKzwriVGtg6R&docid=5BS2KID6ZJq3XM&w=1500&h=1500",
          position: 42,
        },
        {
          title: "Samsung Galaxy Phones | TechRadar",
          imageUrl:
            "https://cdn.mos.cms.futurecdn.net/xcLa2kimeQeVMGWzQSjFRS.jpg",
          imageWidth: 1920,
          imageHeight: 1080,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNCMdyKtpaWGUBEQh0tWMga7S6ZGvTFFLcuw&s",
          thumbnailWidth: 300,
          thumbnailHeight: 168,
          source: "TechRadar",
          domain: "www.techradar.com",
          link: "https://www.techradar.com/phones/samsung-galaxy-phones",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2FxcLa2kimeQeVMGWzQSjFRS.jpg&tbnid=kYXkHA7cTLo2_M&imgrefurl=https%3A%2F%2Fwww.techradar.com%2Fphones%2Fsamsung-galaxy-phones&docid=i1IZFgWdkEYGnM&w=1920&h=1080",
          position: 43,
        },
        {
          title: "Samsung Galaxy A06 Unboxing & First Impressions!",
          imageUrl:
            "https://i.ytimg.com/vi/xyjK39pjJwE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDMwI46VMBisk4AnUj9Rxx4ol7wCw",
          imageWidth: 686,
          imageHeight: 386,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmTjkC_9uJWfB-TWzfq09009VQmhIeNxo0Rw&s",
          thumbnailWidth: 299,
          thumbnailHeight: 168,
          source: "YouTube",
          domain: "www.youtube.com",
          link: "https://www.youtube.com/watch?v=xyjK39pjJwE",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FxyjK39pjJwE%2Fhq720.jpg%3Fsqp%3D-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD%26rs%3DAOn4CLDMwI46VMBisk4AnUj9Rxx4ol7wCw&tbnid=_vnZgqPYjdcIdM&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DxyjK39pjJwE&docid=Lp8G6m01XwIbQM&w=686&h=386",
          position: 44,
        },
        {
          title: "Samsung Galaxy S25 128GB (Unlocked) Navy SM-S931UDBAXAA ...",
          imageUrl:
            "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6612/6612706_sd.jpg;maxHeight=828;maxWidth=400?format=webp",
          imageWidth: 400,
          imageHeight: 400,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDNqWnwDMdPhCZs1vtN2cB5qd6nFKZhF-2dA&s",
          thumbnailWidth: 225,
          thumbnailHeight: 225,
          source: "Best Buy",
          domain: "www.bestbuy.com",
          link: "https://www.bestbuy.com/product/samsung-galaxy-s25-128gb-unlocked-navy/J3ZYG259FS",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpisces.bbystatic.com%2Fimage2%2FBestBuy_US%2Fimages%2Fproducts%2F6612%2F6612706_sd.jpg%3BmaxHeight%3D828%3BmaxWidth%3D400%3Fformat%3Dwebp&tbnid=r-uu3v8K1iQpGM&imgrefurl=https%3A%2F%2Fwww.bestbuy.com%2Fproduct%2Fsamsung-galaxy-s25-128gb-unlocked-navy%2FJ3ZYG259FS&docid=cEpFFSUr6MH5tM&w=400&h=400",
          position: 45,
        },
        {
          title:
            "Samsung is reviewing its mobile division after sharp decline ...",
          imageUrl:
            "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Evolutia_camerelor_foto_pe_seria_emblematica_Samsung_Galaxy_S_8.png",
          imageWidth: 757,
          imageHeight: 529,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6GGms7nmYusbEh_SRvM3UynF1UAEWm_ItQQ&s",
          thumbnailWidth: 269,
          thumbnailHeight: 188,
          source: "Notebookcheck",
          domain: "www.notebookcheck.net",
          link: "https://www.notebookcheck.net/Samsung-is-reviewing-its-mobile-division-after-sharp-decline-in-handheld-sales.553297.0.html",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.notebookcheck.net%2Ffileadmin%2FNotebooks%2FNews%2F_nc3%2FEvolutia_camerelor_foto_pe_seria_emblematica_Samsung_Galaxy_S_8.png&tbnid=rgeMbvqVyWgQlM&imgrefurl=https%3A%2F%2Fwww.notebookcheck.net%2FSamsung-is-reviewing-its-mobile-division-after-sharp-decline-in-handheld-sales.553297.0.html&docid=CjJ-xlsXNpMYcM&w=757&h=529",
          position: 46,
        },
        {
          title: "Mobile Phones :: Samsung :: Samsung Galaxy A16 5G | 8 GB ...",
          imageUrl:
            "https://www.myg.in/images/thumbnails/300/300/detailed/101/71jzh9da4TL._SL1500_-removebg-preview.png.png",
          imageWidth: 300,
          imageHeight: 300,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvBI7SLkKJYdFDd79KE0HsV-ZCVFsfveObLw&s",
          thumbnailWidth: 225,
          thumbnailHeight: 225,
          source: "myG",
          domain: "www.myg.in",
          link: "https://www.myg.in/mobile-phones/samsung/samsung-galaxy-a16-5g-8-gb-128-gb-gold/?srsltid=AfmBOorg2KBcmVVIZFEAp5eUnJv2-Hxh_jFPFDgZrrs-yVwEJF4KconY",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.myg.in%2Fimages%2Fthumbnails%2F300%2F300%2Fdetailed%2F101%2F71jzh9da4TL._SL1500_-removebg-preview.png.png&tbnid=FwyK3Dx7Tg_upM&imgrefurl=https%3A%2F%2Fwww.myg.in%2Fmobile-phones%2Fsamsung%2Fsamsung-galaxy-a16-5g-8-gb-128-gb-gold%2F%3Fsrsltid%3DAfmBOorg2KBcmVVIZFEAp5eUnJv2-Hxh_jFPFDgZrrs-yVwEJF4KconY&docid=e5oOImMZ2KXPBM&w=300&h=300",
          position: 47,
        },
        {
          title:
            "Samsung Devices to Expect in 2024: Galaxy Z Flip 6, Galaxy ...",
          imageUrl:
            "https://www.cnet.com/a/img/resize/97f6ccf10ce050348cc35eaba0d1c21d50577d85/hub/2024/01/25/9060105e-8777-40c7-a842-ba764f3a1fd9/samsung-galaxy-s24-s24-plus-5928.jpg?auto=webp&fit=crop&height=675&width=1200",
          imageWidth: 1200,
          imageHeight: 675,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-GeuhAMtdfl1JxuNCqozXV9mXkeuV6rO-AA&s",
          thumbnailWidth: 300,
          thumbnailHeight: 168,
          source: "CNET",
          domain: "www.cnet.com",
          link: "https://www.cnet.com/tech/mobile/galaxy-s24-is-here-but-were-expecting-more-from-samsung-in-2024/",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.cnet.com%2Fa%2Fimg%2Fresize%2F97f6ccf10ce050348cc35eaba0d1c21d50577d85%2Fhub%2F2024%2F01%2F25%2F9060105e-8777-40c7-a842-ba764f3a1fd9%2Fsamsung-galaxy-s24-s24-plus-5928.jpg%3Fauto%3Dwebp%26fit%3Dcrop%26height%3D675%26width%3D1200&tbnid=DzYs0pPCftXP8M&imgrefurl=https%3A%2F%2Fwww.cnet.com%2Ftech%2Fmobile%2Fgalaxy-s24-is-here-but-were-expecting-more-from-samsung-in-2024%2F&docid=tdvnoi4ObQAQdM&w=1200&h=675",
          position: 48,
        },
        {
          title:
            "Samsung Galaxy A56: Release Date, Price & Specs - Tech Advisor",
          imageUrl:
            "https://www.techadvisor.com/wp-content/uploads/2025/07/Samsung-Galaxy-A56-hands-on-front-handheld-home-screen-straight-1.jpg?quality=50&strip=all",
          imageWidth: 2800,
          imageHeight: 1575,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDs_j0imfLk7f2WKhBtP_fpdgPSVcS8aEu8Q&s",
          thumbnailWidth: 300,
          thumbnailHeight: 168,
          source: "Tech Advisor",
          domain: "www.techadvisor.com",
          link: "https://www.techadvisor.com/article/2467090/samsung-galaxy-a56.html",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.techadvisor.com%2Fwp-content%2Fuploads%2F2025%2F07%2FSamsung-Galaxy-A56-hands-on-front-handheld-home-screen-straight-1.jpg%3Fquality%3D50%26strip%3Dall&tbnid=2QtjTgGShts8DM&imgrefurl=https%3A%2F%2Fwww.techadvisor.com%2Farticle%2F2467090%2Fsamsung-galaxy-a56.html&docid=RmY17fI_6mVq0M&w=2800&h=1575",
          position: 49,
        },
        {
          title: "SAMSUNG Galaxy A16 4G 128GB (Dual SIM) | Cellucity",
          imageUrl:
            "https://cellucity.co.za/wp-content/uploads/2024/11/SAMSUNG-GALAXY-A16-GREEN-128GB-4G-DUAL-SIM.jpg",
          imageWidth: 1000,
          imageHeight: 1000,
          thumbnailUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzVve_tUJPsp045RtJO-ITqB-w92-vUYSKGw&s",
          thumbnailWidth: 225,
          thumbnailHeight: 225,
          source: "Cellucity",
          domain: "cellucity.co.za",
          link: "https://cellucity.co.za/product/samsung-galaxy-a16-4g-128gb-dual-sim/?srsltid=AfmBOoq3yRyQ87sjjtMABUgV5EjxXclGGWmCg5R6BsxkhHJ9odWtAUJ9",
          googleUrl:
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcellucity.co.za%2Fwp-content%2Fuploads%2F2024%2F11%2FSAMSUNG-GALAXY-A16-GREEN-128GB-4G-DUAL-SIM.jpg&tbnid=AJiy5C_3GnuG8M&imgrefurl=https%3A%2F%2Fcellucity.co.za%2Fproduct%2Fsamsung-galaxy-a16-4g-128gb-dual-sim%2F%3Fsrsltid%3DAfmBOoq3yRyQ87sjjtMABUgV5EjxXclGGWmCg5R6BsxkhHJ9odWtAUJ9&docid=0cD6dLzkTg7YXM&w=1000&h=1000",
          position: 50,
        },
      ];

      if (data.length === 0) {
        setIsLoaderVisible(false);
        return;
      }

      currentPage === 1
        ? setImages(data)
        : setImages((prevImages) => [...prevImages, ...data]);
    }

    getData();
  }, [query, currentPage]);

  return (
    <section
      className="flex flex-wrap justify-start gap-5 p-5"
      id="images-container"
    >
      {images.length
        ? images.map((image) => (
            <ImageGalery key={image.title + image.position} {...image} />
          ))
        : numberGenerator(0, 50).map((id) => (
            <ImageGalery key={id} loading={true} />
          ))}

      {isLoaderVisible ? (
        <div
          className="flex items-center justify-center w-full h-45"
          ref={loaderContainerRef}
        >
          <Loader className="border-[#474554]" />
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
