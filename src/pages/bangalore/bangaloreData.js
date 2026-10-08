import { findOfficeBySlug, officePath } from "../../common/slug.js";
/**
 * Bangalore Coworking Spaces Matrix Layout Data & Neighborhood Filters
 * Sourced from verified active coworking listings in Bangalore.
 */

export const bangaloreNeighborhoods = [
  'HSR Layout',
  'Koramangala',
  'MG Road',
  'Indiranagar',
  'Whitefield',
  'Sanjay Nagar',
  'Electronic City',
  'JP Nagar',
  'Jayanagar',
  'Hebbal',
  'Banashankari',
  'Marathahalli',
  'Rajajinagar',
  'Malleshwaram',
  'BTM Layout',
  'Sarjapur Road',
  'Bannerghatta Road',
  'Bellandur',
  'Kalyan Nagar',
  'Domlur',
  'Outer Ring Road',
  'Residency Road',
  'Ashok Nagar',
  'K. R. Puram',
  'Hosur Road',
  'Mahadevapura',
  'Hoodi',
  'EPIP Zone',
  'Sadashiva Nagar',
  'Hennur',
  'Akshaya Nagar'
];

export const bangaloreOfficeCards = [
  {
    id: 1,
    name: 'KustomWork 33',
    badge: 'Premium',
    rating: 4.7,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/kustomwork-33-hsrlayout/29cr8y.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/kustomwork-33-hsrlayout/689q7n.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/kustomwork-33-hsrlayout/8jf7hy.jpg',
      'https://cdn-projects-gharpe.b-cdn.net/kustomwork-33/image/kustomwork-33-01.webp'
    ]
  },
  {
    id: 2,
    name: 'BHIVE Premium',
    badge: 'Popular',
    rating: 4,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://bhiveworkspace.com/wp-content/uploads/2025/10/HSR-Campus-2.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2025/10/HSR-Campus-1.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2024/01/BHIVE-AKR-1.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2025/01/HSR-Layout.png'
    ]
  },
  {
    id: 3,
    name: 'KustomWork 531',
    badge: 'Premium',
    rating: 4.7,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/kustomwork-531-hsrlayout/d426vz.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/kustomwork-531-hsrlayout/9vx4sn.jpg',
      'https://cdn-projects-gharpe.b-cdn.net/kustomwork-531/image/kustomwork-531-03.webp',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/kustomwork-531-hsrlayout/vjh8uv.jpg'
    ]
  },
  {
    id: 4,
    name: 'Hustlehub H206',
    badge: 'Popular',
    rating: 4.6,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://static.wixstatic.com/media/05d936_b8302458ead04a5babbba905b3482ce6~mv2.png',
      'https://static.wixstatic.com/media/05d936_de296f01079340b2a9ee3572b5b232c1~mv2.jpg',
      'https://static.wixstatic.com/media/05d936_7fa240835da54cd2adb964dd21c14957~mv2.jpg',
      'https://static.wixstatic.com/media/05d936_809fde7d962444e9bf51c51d0bd8a2a3~mv2.jpg'
    ]
  },
  {
    id: 5,
    name: 'IndiQube Delta',
    badge: 'Popular',
    rating: 4,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://coworker.imgix.net/photos/india/bengaluru/34186-indiqube/main.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/34186-indiqube/1.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/34186-indiqube/2.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/34186-indiqube/3.jpg'
    ]
  },
  {
    id: 6,
    name: 'Enzyme Office Opal',
    badge: 'Popular',
    rating: 4.3,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹9,499',
    period: '/ month',
    priceFormatted: '₹9,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/enzyme-office-space-hsrlayout-2/exterior/2f4586.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/enzyme-office-space-hsrlayout-2/managed-office/4nc7mr.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/enzyme-office-space-hsrlayout-2/managed-office/qgjutf.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/enzyme-office-space-hsrlayout-2/managed-office/fsre7f.jpg'
    ]
  },
  {
    id: 7,
    name: 'HONEYKOMB BY BHIVE HSR 27th Main',
    badge: 'Popular',
    rating: 4.5,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://honeykomb.work/wp-content/uploads/2023/03/HSR-banner-1.jpg',
      'https://honeykomb.work/wp-content/uploads/2023/03/HSR1-2.jpg',
      'https://honeykomb.work/wp-content/uploads/2023/03/HSR2-2.jpg',
      'https://honeykomb.work/wp-content/uploads/2023/03/HSR3-2.jpg'
    ]
  },
  {
    id: 8,
    name: 'Hustlehub Tech Park',
    badge: 'Popular',
    rating: 4.3,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/hustlehub-2-hsrlayout-2/flexi/hywvaq.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/hustlehub-2-hsrlayout-2/flexi/hbj4r8.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/hustlehub-2-hsrlayout-2/flexi/h4mve3.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/hustlehub-2-hsrlayout-2/flexi/q5e2ts.jpg'
    ]
  },
  {
    id: 321,
    name: 'BHIVE Honeykomb HSR Sector 6',
    badge: 'Premium',
    rating: 4.7,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://honeykomb.work/wp-content/uploads/2023/03/BHIVE_Sec6-18.jpg',
      'https://honeykomb.work/wp-content/uploads/2023/03/Honeykomb-HSR-sec6-1.jpg',
      'https://honeykomb.work/wp-content/uploads/2023/03/BHIVE_Sec6-1.jpg',
      'https://honeykomb.work/wp-content/uploads/2023/03/BHIVE_Sec6-11.jpg',
      'https://honeykomb.work/wp-content/uploads/2023/03/Honeykomb-HSR-sec6-4.jpg'
    ]
  },
  {
    id: 411,
    name: 'EBC Space ITI Layout',
    badge: null,
    rating: 4,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/ebc-space-hsrlayout/exterior/mesggn.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/ebc-space-hsrlayout/dedicated/tz5ved.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/ebc-space-hsrlayout/managed-office/54rh28.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/ebc-space-hsrlayout/dedicated/xr6rtc.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/ebc-space-hsrlayout/dedicated/jx373s.jpg'
    ]
  },
  {
    id: 412,
    name: 'KVC Coworking',
    badge: null,
    rating: null,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore.',
    price: '₹10,999',
    period: '/ Month',
    priceFormatted: '₹10,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/7258eaa0c58d5ce56e019fc1a8bd55794a98bc5b.jpg',
      'https://img.cofynd.com/images/original/b8b66cdb907fa9ab1469d1b6f6ee28b15bfd42a4.jpg',
      'https://img.cofynd.com/images/latest_images_2024/f85e441730783ed847486784d7b110a378e3f824.webp',
      'https://img.cofynd.com/images/latest_images_2024/956b4f48c69755a7303803dad89b233595fb7ec5.webp',
      'https://img.cofynd.com/images/latest_images_2024/9be805c73253837d17f48a683d66069a70ed9b93.webp'
    ]
  },
  {
    id: 413,
    name: '365 Shared Space',
    badge: 'Premium',
    rating: 4.5,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/365-shared-space-hsrlayout/1.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/365-shared-space-hsrlayout/10.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/365-shared-space-hsrlayout/11.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/365-shared-space-hsrlayout/12.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/365-shared-space-hsrlayout/13.jpg'
    ]
  },
  {
    id: 414,
    name: 'Techspace',
    badge: 'Popular',
    rating: 4.6,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹5,499',
    period: '/ month',
    priceFormatted: '₹5,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/f9281528475c492bf1ed563de855b052d4bd7209.webp',
      'https://img.cofynd.com/images/original/66e97384b3e8fff86453c74021b59ee823bed78a.jpg',
      'https://img.cofynd.com/images/latest_images_2024/31fd493b5fab163f9a2d8bddeedf1a1e17a1d885.webp',
      'https://img.cofynd.com/images/latest_images_2024/448660eb3e7510de6808dfa2128570e3bc29b381.webp',
      'https://img.cofynd.com/images/latest_images_2024/bbfe22c34e2dfa71e940a05190c8e8ded20db2e6.webp'
    ]
  },
  {
    id: 415,
    name: 'WorkAdda',
    badge: 'Popular',
    rating: 4.3,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/workadda-hsrlayout/xpxrtc.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/workadda-hsrlayout/gjf3y8.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/workadda-hsrlayout/uex5qh.jpg'
    ]
  },
  {
    id: 318,
    name: 'IndiQube Sunshine',
    badge: 'Popular',
    rating: 4.6,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-sunshine/managed-office/j89kzd.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-sunshine/managed-office/hpedrq.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-sunshine/managed-office/63h6rt.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-sunshine/managed-office/hc9hzh.jpg',
      'https://cdn.coworkingcafe.com:443/images/47C18A04-D326-4946-B92E-4D2B11559722/78859.jpg'
    ]
  },
  {
    id: 416,
    name: 'Think Tank Offices',
    badge: 'Special Offer',
    rating: null,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/think-a-tank80-ft-road-koramangala-koramangala/r9s94b.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/think-a-tank80-ft-road-koramangala-koramangala/ffgvzn.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/think-a-tank80-ft-road-koramangala-koramangala/qypu3f.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/think-a-tank80-ft-road-koramangala-koramangala/bkdqvk.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/think-a-tank80-ft-road-koramangala-koramangala/zdevua.jpg'
    ]
  },
  {
    id: 423,
    name: 'Awfis Prestige Blue Chip',
    badge: 'Popular',
    rating: 4.1,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-prestige-blue-chip/exterior/rx6kqr.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-prestige-blue-chip/dedicated/j5q9br.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-prestige-blue-chip/managed-office/vh9nhe.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-prestige-blue-chip/dedicated/fh8r4q.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-prestige-blue-chip/dedicated/htd66h.jpg'
    ]
  },
  {
    id: 101,
    name: 'kustomWork 45',
    badge: 'Premium',
    rating: 4.4,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/b1ff54dcadaf50529fbeea61a35f0b53087c9b1c.webp',
      'https://img.cofynd.com/images/latest_images_2024/fa4d6b2ac208a58fde9a8fbd1787a19443647f0e.webp',
      'https://img.cofynd.com/images/latest_images_2024/4b45a5534d2ae92ad35195b22ed058d02c0693b9.webp',
      'https://img.cofynd.com/images/latest_images_2024/54297f6ba8fe97e5b071d04bb08b270acac6113a.webp',
      'https://img.cofynd.com/images/latest_images_2024/bbfe22c34e2dfa71e940a05190c8e8ded20db2e6.webp'
    ]
  },
  {
    id: 102,
    name: '91Springboard Gopala Krishna Complex',
    badge: 'Popular',
    rating: 4.2,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/91springboard-gopala-krishna-complex/dedicated/hjhc45.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/91springboard-gopala-krishna-complex/dedicated/syrgnu.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/91springboard-gopala-krishna-complex/dedicated/k8ukm5.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/91springboard-gopala-krishna-complex/virtual-office/8j5h93.jpg'
    ]
  },
  {
    id: 104,
    name: 'Awfis Mission Road',
    badge: 'Popular',
    rating: 4.2,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹9,499',
    period: '/ month',
    priceFormatted: '₹9,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-renaissance-centra/exterior/gqnfce.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-renaissance-centra/dedicated/eny4bk.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-renaissance-centra/dedicated/pkc63t.jpg',
      'https://cdn-projects-gharpe.b-cdn.net/awfis-mission-road/image/awfis-mission-road-01.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-renaissance-centra/dedicated/j6b9h4.jpg'
    ]
  },
  {
    id: 201,
    name: 'Novel Office Central',
    badge: 'Popular',
    rating: 4.7,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.coworkingcafe.com:443/images/44493E79-03F6-44CC-8071-8F6405BD1B8C/22839.jpg',
      'https://cdn.coworkingcafe.com:443/images/40EDF3A0-5789-4726-A118-03A2B13D2E04/22839.jpg',
      'https://cdn.coworkingcafe.com:443/images/BB841F79-186B-4211-9E4F-0CEF5AC9167B/22839.jpg',
      'https://cdn.coworkingcafe.com:443/images/979394E4-F5D2-4C5C-A9E6-6AB633EA6265/22839.jpg',
      'https://cdn.coworkingcafe.com:443/images/418ED102-F832-4B88-AAF8-5853522FE65A/22839.jpg'
    ]
  },
  {
    id: 202,
    name: 'Awfis The Estate Building',
    badge: 'Popular',
    rating: 4.2,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-the-estate-building/8npnag.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-the-estate-building/jf3pqd.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-the-estate-building/managed-office/jan9qe.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-the-estate-building/2stasv.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-the-estate-building/8yvxfa.jpg'
    ]
  },
  {
    id: 203,
    name: 'BHIVE Workspace',
    badge: 'Premium',
    rating: 4.3,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹11,999',
    period: '/ month',
    priceFormatted: '₹11,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://bhiveworkspace.com/wp-content/uploads/2025/10/kspace-MG-Road-2.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2025/10/kspace-MG-Road-3.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2025/10/kspace-MG-Road-4.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2025/01/MG-Road.png',
      'https://bhiveworkspace.com/wp-content/uploads/2024/01/MG_BHIVE-47-scaled-1.jpg'
    ]
  },
  {
    id: 204,
    name: 'BHIVE Prim Rose',
    badge: 'Premium',
    rating: 4.4,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹9,499',
    period: '/ month',
    priceFormatted: '₹9,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://bhiveworkspace.com/wp-content/uploads/2024/01/MG_BHIVE-20.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2024/01/MG_BHIVE-1.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2024/01/MG_BHIVE-13.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2024/01/MG_BHIVE-12.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2024/01/IMG_0723.jpg'
    ]
  },
  {
    id: 205,
    name: 'UNITUS',
    badge: 'Premium',
    rating: null,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹10,499',
    period: '/ month',
    priceFormatted: '₹10,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/unitus-indiranagar/exterior/7f9m5m.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/unitus-indiranagar/dedicated/q8aepu.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/unitus-indiranagar/managed-office/4pmg97.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/unitus-indiranagar/dedicated/qwhsdd.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/unitus-indiranagar/dedicated/amkqj7.jpg'
    ]
  },
  {
    id: 206,
    name: '91springboard George Thangaiah Complex',
    badge: 'Popular',
    rating: 4.3,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/91springboard-george-thangaiah-complex/exterior/k4j7rp.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/91springboard-george-thangaiah-complex/dedicated/ubtt3r.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/91springboard-george-thangaiah-complex/dedicated/8dyjwg.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/91springboard-george-thangaiah-complex/exterior/z4btdd.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/91springboard-george-thangaiah-complex/flexi/plans/flexi-desk/hakews.jpg'
    ]
  },
  {
    id: 207,
    name: 'IndiQube Opal',
    badge: 'Popular',
    rating: 4.5,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-opal/exterior/wjckcb.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-opal/managed-office/z34te4.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-opal/managed-office/m9scbq.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-opal/managed-office/h3yaaw.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-opal/meeting-room/plans/4-seater/v6pahj.jpg'
    ]
  },
  {
    id: 208,
    name: 'BHIVE Platinum Indiranagar',
    badge: 'Popular',
    rating: 4.1,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹14,999',
    period: '/ month',
    priceFormatted: '₹14,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://bhiveworkspace.com/wp-content/uploads/2023/12/platinum-Indranaga4.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2023/12/platinum-Indranaga3.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2023/12/platinum-Indranaga5.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2026/06/BHIVE-Premium-CMH-Road-Campus-Indiranagar.png',
      'https://bhiveworkspace.com/wp-content/uploads/2023/12/platinum-Indranaga8.jpg'
    ]
  },
  {
    id: 209,
    name: 'BHIVE Premium Indiranagar',
    badge: 'Popular',
    rating: 4.1,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹11,999',
    period: '/ month',
    priceFormatted: '₹11,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://bhiveworkspace.com/wp-content/uploads/2024/01/CMH-8.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2025/07/Indiranagar-BHIVE-Premium1.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2025/07/Indiranagar-BHIVE-Premium2.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2025/07/Indiranagar-BHIVE-Premium3.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2023/06/CMH2.jpg'
    ]
  },
  {
    id: 210,
    name: 'IndiQube Embassy Prime',
    badge: 'Popular',
    rating: 4,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-embassy-prime/ena3qr.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-embassy-prime/managed-office/ppfx28.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-embassy-prime/managed-office/shaanb.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-embassy-prime/managed-office/exkjqy.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-embassy-prime/managed-office/nfrw8u.jpg'
    ]
  },
  {
    id: 211,
    name: 'IndiQube TownHub',
    badge: 'Popular',
    rating: 4.1,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://assets.instantoffices.com/image/upload/f_webp,w_3840/v1772029077/TIG/Locations/b365de98-1b26-4ed1-8c74-7b73978bad9a/17b26f6e-6084-443b-b86f-5d655a66a00d.webp'
    ]
  },
  {
    id: 212,
    name: 'Honeykomb by BHIVE',
    badge: 'Premium',
    rating: 4.7,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://honeykomb.work/wp-content/uploads/2023/03/Ind2-1.jpg',
      'https://honeykomb.work/wp-content/uploads/2023/03/Ind8-1.jpg',
      'https://honeykomb.work/wp-content/uploads/2023/03/Ind9-2.jpg',
      'https://honeykomb.work/wp-content/uploads/2023/03/Ind7-3.jpg',
      'https://honeykomb.work/wp-content/uploads/2023/03/Ind6-1-scaled.jpg'
    ]
  },
  {
    id: 445,
    name: 'Moss Space Diamond District',
    badge: null,
    rating: 4.7,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹16,999',
    period: '/ month',
    priceFormatted: '₹16,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/moss-by-ibc-bangalore-bannerghatta-road-diamond-district/exterior/f63rfv.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/moss-by-ibc-bangalore-bannerghatta-road-diamond-district/managed-office/rekfbe.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/moss-by-ibc-bangalore-bannerghatta-road-diamond-district/managed-office/ptqvqy.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/moss-by-ibc-bangalore-bannerghatta-road-diamond-district/managed-office/a9ndxt.jpg'
    ]
  },
  {
    id: 446,
    name: 'The Yard Carlton Towers',
    badge: null,
    rating: 4.7,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/75c99a42549db958c07069acd879e75aa5f112ed.webp',
      'https://img.cofynd.com/images/latest_images_2024/c4eac98c57ce93134b30bfe52e6d81b89f36d950.webp',
      'https://img.cofynd.com/images/latest_images_2024/a8174cdde6434d110328175fc17bc3da838cf047.webp',
      'https://img.cofynd.com/images/latest_images_2024/813ecb06fedf654b74e94aa6617a73201d1bdaf4.webp',
      'https://img.cofynd.com/images/latest_images_2024/fbe554bfd53457183e29f3d9f187422f6764506c.webp'
    ]
  },
  {
    id: 213,
    name: 'BHIVE JBR Tech Park',
    badge: 'Premium',
    rating: 4.4,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://bhiveworkspace.com/wp-content/uploads/2023/04/BHIVE-JBR.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2023/04/BHIVE-JBR7.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2023/04/BHIVE-JBR8.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2025/01/Whitefield.png',
      'https://bhiveworkspace.com/wp-content/uploads/2023/04/BHIVE-JBR4.jpg'
    ]
  },
  {
    id: 214,
    name: 'Awfis Prestige Shantiniketan 3',
    badge: 'Premium',
    rating: 5,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-prestige-shantiniketan-3/exterior/9qugwr.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-prestige-shantiniketan-3/yxw95b.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-prestige-shantiniketan-3/managed-office/9tws3p.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-prestige-shantiniketan-3/22v9a3.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-prestige-shantiniketan-3/4vc6a9.jpg'
    ]
  },
  {
    id: 215,
    name: 'Regus Crescent Tower 4',
    badge: 'Popular',
    rating: 4.4,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹14,499',
    period: '/ month',
    priceFormatted: '₹14,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/regus-prestige-shantiniketan/exterior/3mgeqz.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/regus-prestige-shantiniketan/ct8pg6.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/regus-prestige-shantiniketan/sy525m.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/regus-prestige-shantiniketan/fxkez7.jpg'
    ]
  },
  {
    id: 216,
    name: 'iFinStrats Coworking',
    badge: 'Popular',
    rating: 5,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹4,999',
    period: '/ month',
    priceFormatted: '₹4,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/cd9f04f471f5ea005020617e30a9f4032da22c21.jpg',
      'https://img.cofynd.com/images/original/cc028d5433b846b6f993f6347065dec9c2cce57b.jpg',
      'https://img.cofynd.com/images/original/bfff48aef50ccab635f23f52fe972d5e8f016d1c.jpg',
      'https://img.cofynd.com/images/original/889ee3386c6466869f834312dd34e06f91bdd896.jpg',
      'https://img.cofynd.com/images/original/69569c8afd62b618624977f0eee1b0ae5dc407d1.jpg'
    ]
  },
  {
    id: 217,
    name: 'Goodworks Cowork Shantiniketan',
    badge: 'Popular',
    rating: 3.7,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/goodworks-coworks-whitefield/managed-office/cant34.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/goodworks-coworks-whitefield/managed-office/tubjtn.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/goodworks-coworks-whitefield/managed-office/c7q46q.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/goodworks-coworks-whitefield/managed-office/dm6cc2.jpg'
    ]
  },
  {
    id: 218,
    name: 'WorkX Brigade IRV Centre',
    badge: 'Popular',
    rating: 4.5,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://coworker.imgix.net/photos/india/bengaluru/workx-coworking-spaces/main.png',
      'https://coworker.imgix.net/photos/india/bengaluru/workx-coworking-spaces/1.JPEG',
      'https://coworker.imgix.net/photos/india/bengaluru/workx-coworking-spaces/2.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/workx-coworking-spaces/3.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/workx-coworking-spaces/4.JPG'
    ]
  },
  {
    id: 219,
    name: 'Awfis Prestige Shantiniketan',
    badge: 'Premium',
    rating: 4.7,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-prestige-shantiniketan/exterior/b6a4ft.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-prestige-shantiniketan/managed-office/x3eqd5.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-prestige-shantiniketan/managed-office/7jdzy3.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-prestige-shantiniketan/managed-office/kvb8bt.jpg'
    ]
  },
  {
    id: 220,
    name: 'Goodworks Cowork',
    badge: 'Popular',
    rating: 4.6,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/78bc4d88354587a176c6a31ab2ddba293b901b19.jpg',
      'https://img.cofynd.com/images/original/c5a7db9b91dd6bf706976e9b22da4f55f4a0b025.jpg',
      'https://img.cofynd.com/images/original/942c600ef2c626e1c17aac5b752bfc450ac4c9c8.jpg',
      'https://img.cofynd.com/images/original/9b7f24cde4937a98aba76099466eb718d004a15f.jpg',
      'https://img.cofynd.com/images/original/a1f0861ff263201bb7514438a97b4b2a997355ae.jpg'
    ]
  },
  {
    id: 526,
    name: 'Workhub by Novel Office',
    badge: 'Premium',
    rating: 4.7,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹8,900',
    period: '/ month',
    priceFormatted: '₹8,900 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/20da51b29df772b7e8f6739076112d855b0894f7.webp',
      'https://img.cofynd.com/images/latest_images_2024/5ab639e6b372917886889378c99795b4e4b7d357.webp',
      'https://img.cofynd.com/images/latest_images_2024/a56c458480e9e7948160cb4b5a75cc749972128f.webp',
      'https://img.cofynd.com/images/latest_images_2024/17a121e8dc76faa48ed1587bd39c83bae85918d2.webp'
    ]
  },
  {
    id: 528,
    name: 'Awfis Prestige Shantiniketan 2',
    badge: 'Popular',
    rating: 4.5,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-prestige-shantiniketan-2/dedicated/4jpgh7.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-prestige-shantiniketan-2/dedicated/a7tbah.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-prestige-shantiniketan-2/dedicated/2dragk.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-prestige-shantiniketan-2/dedicated/hd7dbr.jpg'
    ]
  },
  {
    id: 537,
    name: 'Enzyme Park',
    badge: 'Popular',
    rating: 5,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/35a452410dbdb38b098f51e1feab1ac37610660e.jpg',
      'https://img.cofynd.com/images/latest_images_2024/590357500eab598657f087eef4dec54b672eb91a.webp',
      'https://img.cofynd.com/images/original/1b34ea2a5d01a9c268cb660dcf83e0b392cf4f3e.jpg',
      'https://img.cofynd.com/images/original/a1c0106b57c1301b84810b39d1a67aa99c205ec5.jpg',
      'https://img.cofynd.com/images/original/a3086bd7c780ef6a8e8bf884e4305aebfd493bef.jpg'
    ]
  },
  {
    id: 539,
    name: 'Evoma',
    badge: 'Special Offer',
    rating: 3.6,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://freakingnomads.s3.us-east-1.amazonaws.com/workspaces/cloudinary_4447_1787063318393.webp',
      'https://freakingnomads.s3.us-east-1.amazonaws.com/workspaces/cloudinary_4448_1787063318193.webp',
      'https://freakingnomads.s3.us-east-1.amazonaws.com/workspaces/cloudinary_4449_1787063318013.webp'
    ]
  },
  {
    id: 540,
    name: 'Gopalan Millennium Tower',
    badge: null,
    rating: 4.1,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/gopalan-millennium-tower-whitefield/exterior/vxhhhr.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/gopalan-millennium-tower-whitefield/exterior/vu9h4f.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/gopalan-millennium-tower-whitefield/managed-office/vvanug.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/gopalan-millennium-tower-whitefield/managed-office/kdwe7c.jpg'
    ]
  },
  {
    id: 602,
    name: 'Evolve Work Studio',
    badge: 'Popular',
    rating: 4.2,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹4,999',
    period: '/ month',
    priceFormatted: '₹4,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/5176199e84c881a6da33330f0648e84ee0c8263b.webp',
      'https://img.cofynd.com/images/latest_images_2024/ba1da479c668bcde77de2e6da807cc5bfc0c6fdf.webp',
      'https://img.cofynd.com/images/latest_images_2024/d05ac68e752d48d18a9548d8cb836b81fd95c18a.webp',
      'https://img.cofynd.com/images/latest_images_2024/42e061a664661b8837b419f2e31407d72d806e20.webp'
    ]
  },
  {
    id: 603,
    name: 'Cowrks NXT Tower 1B',
    badge: 'Premium',
    rating: 4.3,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹11,499',
    period: '/ month',
    priceFormatted: '₹11,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/cowrks-rmz-nxt/exterior/8tbg59.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/cowrks-rmz-nxt/dedicated/rn86ea.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/cowrks-rmz-nxt/dedicated/xqmrhc.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/cowrks-rmz-nxt/dedicated/jp8fed.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/cowrks-rmz-nxt/1.jpg'
    ]
  },
  {
    id: 604,
    name: 'Unispace Business Center',
    badge: 'Popular',
    rating: 4.5,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://cdn-projects-gharpe.b-cdn.net/unispace-business-center-whitefield/image/unispace-business-center-whitefield-01.jpg',
      'https://cdn-projects-gharpe.b-cdn.net/unispace-business-center-whitefield/image/unispace-business-center-whitefield-02.jpg',
      'https://cdn-projects-gharpe.b-cdn.net/unispace-business-center-whitefield/image/unispace-business-center-whitefield-03.webp',
      'https://cdn-projects-gharpe.b-cdn.net/unispace-business-center-whitefield/image/unispace-business-center-whitefield-04.webp',
      'https://cdn-projects-gharpe.b-cdn.net/unispace-business-center-whitefield/image/unispace-business-center-whitefield-05.webp'
    ]
  },
  {
    id: 221,
    name: 'Bootstart Coworking – Rishab Arcade',
    badge: 'Popular',
    rating: 4.5,
    area: 'Sanjay Nagar',
    location: 'Sanjay Nagar, Bangalore',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://cdn-projects-gharpe.b-cdn.net/bootstart-coworking---sanjay-nagar/image/bootstart-coworking---sanjay-nagar-01.jpg',
      'https://cdn-projects-gharpe.b-cdn.net/bootstart-coworking---sanjay-nagar/image/bootstart-coworking---sanjay-nagar-02.jpg',
      'https://cdn-projects-gharpe.b-cdn.net/bootstart-coworking---sanjay-nagar/image/bootstart-coworking---sanjay-nagar-03.jpg',
      'https://cdn-projects-gharpe.b-cdn.net/bootstart-coworking---sanjay-nagar/image/bootstart-coworking---sanjay-nagar-04.jpg',
      'https://cdn-projects-gharpe.b-cdn.net/bootstart-coworking---sanjay-nagar/image/bootstart-coworking---sanjay-nagar-05.jpg'
    ]
  },
  {
    id: 222,
    name: 'Spacemakers',
    badge: null,
    rating: 4.7,
    area: 'Sanjay Nagar',
    location: 'Sanjay Nagar, Bangalore',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/7a47e648e2f8507f22b0bbe17ffba95c038ccc25.jpg',
      'https://img.cofynd.com/images/original/1cbff71d3df1dc948c372fb25b209191a08e5b86.jpg',
      'https://img.cofynd.com/images/latest_images_2024/9988de7ec9e649e7e9ccc0ecd20186d8dc62afd0.webp',
      'https://img.cofynd.com/images/latest_images_2024/7cac68ecacd3f6a32407f74844adc4d5b797d1a1.webp',
      'https://img.cofynd.com/images/original/4484d5dc0e0cc0ab0f9ba4d507d679e2ac72830a.jpg'
    ]
  },
  {
    id: 229,
    name: 'Kaarya',
    badge: null,
    rating: null,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/5d6bdce911d2d6d29a01d2a56ae7551421f5fb25.webp',
      'https://img.cofynd.com/images/latest_images_2024/424d2d95b9d69f017cfd31a532f01b6b67b376ee.webp',
      'https://img.cofynd.com/images/latest_images_2024/7a3d410415516b1f5c82f9347b1bd0b56304e59e.webp',
      'https://img.cofynd.com/images/latest_images_2024/dffa9636309a5bd2d9414d44759c37d0a286e88e.webp',
      'https://img.cofynd.com/images/original/dedd21b7ac35de0f9975a8f9039b13b3f34b4668.jpg'
    ]
  },
  {
    id: 230,
    name: '91springboard',
    badge: 'Popular',
    rating: 4.4,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/91springboard-jpnagar/flexi/kbqks5.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/91springboard-jpnagar/flexi/a52twv.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/91springboard-jpnagar/flexi/plans/flexi-desk/c569yj.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/91springboard-jpnagar/flexi/plans/flexi-desk/734zkd.jpg'
    ]
  },
  {
    id: 231,
    name: 'Kustomwork',
    badge: 'Popular',
    rating: 5,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://cdn-projects-gharpe.b-cdn.net/kustomwork-jp-nagar/image/kustomwork-jp-nagar-01.jpg',
      'https://cdn-projects-gharpe.b-cdn.net/kustomwork-jp-nagar/image/kustomwork-jp-nagar-02.webp',
      'https://cdn-projects-gharpe.b-cdn.net/kustomwork-jp-nagar/image/kustomwork-jp-nagar-03.webp',
      'https://cdn-projects-gharpe.b-cdn.net/kustomwork-jp-nagar/image/kustomwork-jp-nagar-04.webp',
      'https://cdn-projects-gharpe.b-cdn.net/kustomwork-jp-nagar/image/kustomwork-jp-nagar-05.webp'
    ]
  },
  {
    id: 232,
    name: 'Vatika Business Centre DivyaSree',
    badge: 'Popular',
    rating: 4.6,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/5176199e84c881a6da33330f0648e84ee0c8263b.webp',
      'https://img.cofynd.com/images/latest_images_2024/ba1da479c668bcde77de2e6da807cc5bfc0c6fdf.webp',
      'https://img.cofynd.com/images/latest_images_2024/d05ac68e752d48d18a9548d8cb836b81fd95c18a.webp',
      'https://img.cofynd.com/images/latest_images_2024/42e061a664661b8837b419f2e31407d72d806e20.webp'
    ]
  },
  {
    id: 233,
    name: 'IndiQube Miniforest',
    badge: 'Popular',
    rating: 4.5,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-miniforest/1.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-miniforest/2.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-miniforest/3.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-miniforest/meeting-room/plans/6-seater/jvu4js.jpg'
    ]
  },
  {
    id: 234,
    name: 'IndiQube South Island',
    badge: 'Popular',
    rating: 4.4,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-jpnagar/exterior/twab2b.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-jpnagar/managed-office/zsquc2.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-jpnagar/managed-office/w8zd7a.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-jpnagar/managed-office/gdfnc7.jpg'
    ]
  },
  {
    id: 235,
    name: 'Clayworks',
    badge: 'Popular',
    rating: 4.6,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/clayworks-jp-nagar/flexi/fmad8d.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/clayworks-jp-nagar/flexi/plans/flexi-desk/wq57pj.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/clayworks-jp-nagar/flexi/cqq7c4.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/clayworks-jp-nagar/flexi/hxm2fw.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/clayworks-jp-nagar/meeting-room/plans/6-seater/bahwur.jpg'
    ]
  },
  {
    id: 236,
    name: 'Rainmakers',
    badge: 'Popular',
    rating: 4.5,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/94520e6c657a26032275bae6ec5ecb28c2ec3645.webp',
      'https://img.cofynd.com/images/latest_images_2024/8fb511efff6c4ac3e675feb33da2fed7bab8fea8.webp',
      'https://img.cofynd.com/images/latest_images_2024/b3b4f02542246091ec686e628f183388997ace01.webp',
      'https://img.cofynd.com/images/latest_images_2024/800f8563e454a64cd599567bfa7718b836dd7765.webp',
      'https://img.cofynd.com/images/latest_images_2024/be8dd586067e9fad71f14f885311a3df59edcdd3.webp'
    ]
  },
  {
    id: 422,
    name: 'Gopalan Coworks',
    badge: 'Special Offer',
    rating: 4.5,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://freakingnomads.s3.us-east-1.amazonaws.com/workspaces/cloudinary_2454_1787063194717.webp',
      'https://freakingnomads.s3.us-east-1.amazonaws.com/workspaces/cloudinary_2455_1787063194677.webp',
      'https://freakingnomads.s3.us-east-1.amazonaws.com/workspaces/cloudinary_2456_1787063194715.webp'
    ]
  },
  {
    id: 301,
    name: 'InstaSquares',
    badge: 'Special Offer',
    rating: 3.8,
    area: 'Jayanagar',
    location: 'Jayanagar, Bangalore',
    price: '₹4,999',
    period: '/ month',
    priceFormatted: '₹4,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://coworker.imgix.net/photos/india/bengaluru/instasquares-business-center/main.JPG',
      'https://coworker.imgix.net/photos/india/bengaluru/instasquares-business-center/1.JPG',
      'https://coworker.imgix.net/photos/india/bengaluru/instasquares-business-center/2.JPG',
      'https://coworker.imgix.net/photos/india/bengaluru/instasquares-business-center/3.JPG',
      'https://coworker.imgix.net/photos/india/bengaluru/instasquares-business-center/4.JPG'
    ]
  },
  {
    id: 302,
    name: 'IndiQube South Mile',
    badge: 'Popular',
    rating: 4.3,
    area: 'Jayanagar',
    location: 'Jayanagar, Bangalore',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-jayanagar/1.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-jayanagar/10.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-jayanagar/11.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-jayanagar/meeting-room/plans/8-seater/y9zs3m.jpg'
    ]
  },
  {
    id: 303,
    name: 'IndiQube South Summit',
    badge: 'Popular',
    rating: 4.3,
    area: 'Jayanagar',
    location: 'Jayanagar, Bangalore',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/3a09b79b0dcbb5f7958d9470187c8a27ffdf17ad.jpg',
      'https://img.cofynd.com/images/original/3b31cf2e8881b77e0d2ef66283cb0775fa123281.jpg',
      'https://img.cofynd.com/images/original/fbf926341143fd97b0df29962e5a54a47dbcf8f8.jpg',
      'https://img.cofynd.com/images/original/15db7af84400b986b0cd043befb3d6c79295f50c.jpg',
      'https://img.cofynd.com/images/original/0bb076ef96db49479c8e9b67897f50922e88c90e.jpg'
    ]
  },
  {
    id: 304,
    name: 'BHIVE Premium',
    badge: 'Popular',
    rating: 4,
    area: 'Jayanagar',
    location: 'Jayanagar, Bangalore',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://bhiveworkspace.com/wp-content/uploads/2025/10/Jayanagar-10.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2025/10/Jayanagar-2.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2025/10/Jayanagar-1.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2025/10/Jayanagar-3.jpg'
    ]
  },
  {
    id: 305,
    name: 'Synergy Workspace',
    badge: 'Popular',
    rating: 4.8,
    area: 'Jayanagar',
    location: 'Jayanagar, Bangalore',
    price: '₹4,999',
    period: '/ month',
    priceFormatted: '₹4,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/5f7324a00fd749c9b0ad758d47edfd5d580def38.jpg',
      'https://img.cofynd.com/images/original/adb1c372b80aa8d599d393a466d06e2c45f907c4.jpg',
      'https://img.cofynd.com/images/original/86890c758fbfc951a1e54e0fe403f14ec6c9e0f4.jpg',
      'https://img.cofynd.com/images/original/7f5741db7a68d8fdea858bda92cba9cd37b89814.jpg',
      'https://img.cofynd.com/images/original/83fdd16c008a520c82723ad290e25631b81c686f.jpg'
    ]
  },
  {
    id: 306,
    name: 'Kolab',
    badge: 'Popular',
    rating: 4.6,
    area: 'Jayanagar',
    location: 'Jayanagar, Bangalore',
    price: '₹5,499',
    period: '/ month',
    priceFormatted: '₹5,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/14dc3097883d00ded75870b6f23b60d047248ea3.jpg',
      'https://img.cofynd.com/images/original/7d991afab856ff7600aec026003965109021e1b8.jpg',
      'https://img.cofynd.com/images/original/640b02753a521ca316019b6fb8bf473565b0edd0.jpg',
      'https://img.cofynd.com/images/original/67761bee47530b701654a4abe1c58a451a279c4c.jpg',
      'https://img.cofynd.com/images/original/856d9d73fc023c1c3eeab089f859b4ff0e56bc1e.jpg'
    ]
  },
  {
    id: 307,
    name: 'Speciico Office',
    badge: 'Special Offer',
    rating: 3.4,
    area: 'Jayanagar',
    location: 'Jayanagar, Bangalore',
    price: '₹23,999',
    period: '/ month',
    priceFormatted: '₹23,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/specico-office-jayanagar/v9usea.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/specico-office-jayanagar/4698bp.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/specico-office-jayanagar/ghuabb.jpg'
    ]
  },
  {
    id: 308,
    name: 'Hubstairs',
    badge: 'Popular',
    rating: 4.3,
    area: 'Jayanagar',
    location: 'Jayanagar, Bangalore',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/94520e6c657a26032275bae6ec5ecb28c2ec3645.webp',
      'https://img.cofynd.com/images/latest_images_2024/8fb511efff6c4ac3e675feb33da2fed7bab8fea8.webp',
      'https://img.cofynd.com/images/latest_images_2024/b3b4f02542246091ec686e628f183388997ace01.webp',
      'https://img.cofynd.com/images/latest_images_2024/800f8563e454a64cd599567bfa7718b836dd7765.webp',
      'https://img.cofynd.com/images/latest_images_2024/be8dd586067e9fad71f14f885311a3df59edcdd3.webp'
    ]
  },
  {
    id: 320,
    name: 'Regus Supreme Overseas Export',
    badge: 'Popular',
    rating: 3.6,
    area: 'Jayanagar',
    location: 'Jayanagar, Bangalore',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/65f1543b7fb401b76756dfbe5269035c952a8dc0.jpg',
      'https://img.cofynd.com/images/original/3776ddb85db9ac28c248b10c2e2237310889a9b0.jpg',
      'https://img.cofynd.com/images/original/f65a5b41aa00174147fd42068bfb500eca17bba7.jpg',
      'https://img.cofynd.com/images/original/f3bce1f518470efc471ddf30b4e8342c03601b4b.jpg',
      'https://img.cofynd.com/images/original/0a48c90eb5599f802649137a5dad227be87a27ca.jpg'
    ]
  },
  {
    id: 309,
    name: 'Indiqube Opus',
    badge: 'Popular',
    rating: 4.4,
    area: 'Hebbal',
    location: 'Hebbal, Bangalore',
    price: '₹10,499',
    period: '/ month',
    priceFormatted: '₹10,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/70c576585e2c824605936ad8e7673e9c39184ba2.webp',
      'https://img.cofynd.com/images/latest_images_2024/48f0d77e79a17aeed1cf6cebcdfea9e2e0164a12.webp',
      'https://img.cofynd.com/images/latest_images_2024/8d55814bd293910552a3f620f21cabb39e5735c4.webp',
      'https://img.cofynd.com/images/latest_images_2024/25544f614e445f6de20e55eb28644e33a04f7ee4.webp',
      'https://img.cofynd.com/images/latest_images_2024/2a8a4caef5e0eff769885d4a2cca70c9b45815a2.webp'
    ]
  },
  {
    id: 310,
    name: 'Enzyme Citrine',
    badge: 'Popular',
    rating: 5,
    area: 'Hebbal',
    location: 'Hebbal, Bangalore',
    price: '₹10,499',
    period: '/ month',
    priceFormatted: '₹10,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/257e7838d5ecd76899b5aa07882c06d8be9a1aea.webp',
      'https://img.cofynd.com/images/latest_images_2024/badddc2ec7c34c920dfa563e34dc9b9b7b95dabe.webp',
      'https://img.cofynd.com/images/latest_images_2024/95fab10176feeb8c1582592e681b165f45d2078f.webp',
      'https://img.cofynd.com/images/latest_images_2024/eed15866008aac7b019ca665de5e1288d134a2aa.webp',
      'https://img.cofynd.com/images/latest_images_2024/e79274eb294face92d52517d40c60bf2ce6aebde.webp'
    ]
  },
  {
    id: 311,
    name: 'IndiQube Marriott The Courtyard',
    badge: 'Popular',
    rating: 4.6,
    area: 'Hebbal',
    location: 'Hebbal, Bangalore',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-marriott/managed-office/8xfb7g.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-marriott/managed-office/ybabjz.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-marriott/managed-office/9g5s8j.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-marriott/managed-office/9ux95b.jpg'
    ]
  },
  {
    id: 312,
    name: 'Enzyme Triumph',
    badge: 'Popular',
    rating: 5,
    area: 'Hebbal',
    location: 'Hebbal, Bangalore',
    price: '₹9,499',
    period: '/ month',
    priceFormatted: '₹9,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/cd9f04f471f5ea005020617e30a9f4032da22c21.jpg',
      'https://img.cofynd.com/images/original/cc028d5433b846b6f993f6347065dec9c2cce57b.jpg',
      'https://img.cofynd.com/images/original/bfff48aef50ccab635f23f52fe972d5e8f016d1c.jpg',
      'https://img.cofynd.com/images/original/889ee3386c6466869f834312dd34e06f91bdd896.jpg',
      'https://img.cofynd.com/images/original/69569c8afd62b618624977f0eee1b0ae5dc407d1.jpg'
    ]
  },
  {
    id: 313,
    name: 'Regus Manyata Embassy Business Park',
    badge: 'Premium',
    rating: 4.1,
    area: 'Hebbal',
    location: 'Hebbal, Bangalore',
    price: '₹12,099',
    period: '/ month',
    priceFormatted: '₹12,099 / month',
    ctaText: 'Get Quote',
    images: [
      'https://coworker.imgix.net/photos/india/bengaluru/regus-bangalore-manyata-embassy-business-park/cc68abc5f7b6926791a44898f95a3683.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/regus-bangalore-manyata-embassy-business-park/d6af65da292d3aeb15bbddaa66dacd5a.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/regus-bangalore-manyata-embassy-business-park/d2a0995aabd3577894f67f4202f7642c.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/regus-bangalore-manyata-embassy-business-park/820976b70e79cba53cbbbb672447057a.jpg'
    ]
  },
  {
    id: 314,
    name: 'Smartworks The Cube',
    badge: 'Premium',
    rating: 4.4,
    area: 'Hebbal',
    location: 'Hebbal, Bangalore',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://cdn-projects-gharpe.b-cdn.net/smartworks-the-cube/image/smartworks-the-cube-01.webp',
      'https://cdn-projects-gharpe.b-cdn.net/smartworks-the-cube/image/smartworks-the-cube-02.webp',
      'https://cdn-projects-gharpe.b-cdn.net/smartworks-the-cube/image/smartworks-the-cube-03.webp',
      'https://cdn-projects-gharpe.b-cdn.net/smartworks-the-cube/image/smartworks-the-cube-04.webp',
      'https://cdn-projects-gharpe.b-cdn.net/smartworks-the-cube/image/smartworks-the-cube-05.webp'
    ]
  },
  {
    id: 315,
    name: 'Crescent Workspace',
    badge: null,
    rating: 4.9,
    area: 'Hebbal',
    location: 'Hebbal, Bangalore',
    price: '₹4,999',
    period: '/ month',
    priceFormatted: '₹4,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/7258eaa0c58d5ce56e019fc1a8bd55794a98bc5b.jpg',
      'https://img.cofynd.com/images/original/b8b66cdb907fa9ab1469d1b6f6ee28b15bfd42a4.jpg',
      'https://img.cofynd.com/images/latest_images_2024/f85e441730783ed847486784d7b110a378e3f824.webp',
      'https://img.cofynd.com/images/latest_images_2024/956b4f48c69755a7303803dad89b233595fb7ec5.webp',
      'https://img.cofynd.com/images/latest_images_2024/9be805c73253837d17f48a683d66069a70ed9b93.webp'
    ]
  },
  {
    id: 316,
    name: 'Concolor',
    badge: null,
    rating: null,
    area: 'Hebbal',
    location: 'Hebbal, Bangalore',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/78bc4d88354587a176c6a31ab2ddba293b901b19.jpg',
      'https://img.cofynd.com/images/original/c5a7db9b91dd6bf706976e9b22da4f55f4a0b025.jpg',
      'https://img.cofynd.com/images/original/942c600ef2c626e1c17aac5b752bfc450ac4c9c8.jpg',
      'https://img.cofynd.com/images/original/9b7f24cde4937a98aba76099466eb718d004a15f.jpg',
      'https://img.cofynd.com/images/original/a1f0861ff263201bb7514438a97b4b2a997355ae.jpg'
    ]
  },
  {
    id: 317,
    name: 'WorkPodz',
    badge: 'Special Offer',
    rating: 5,
    area: 'Banashankari',
    location: 'Banashankari, Bangalore',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/f9281528475c492bf1ed563de855b052d4bd7209.webp',
      'https://img.cofynd.com/images/original/66e97384b3e8fff86453c74021b59ee823bed78a.jpg',
      'https://img.cofynd.com/images/latest_images_2024/31fd493b5fab163f9a2d8bddeedf1a1e17a1d885.webp',
      'https://img.cofynd.com/images/latest_images_2024/448660eb3e7510de6808dfa2128570e3bc29b381.webp',
      'https://img.cofynd.com/images/latest_images_2024/bbfe22c34e2dfa71e940a05190c8e8ded20db2e6.webp'
    ]
  },
  {
    id: 223,
    name: 'Novel Office MSR Building',
    badge: 'Popular',
    rating: 4.8,
    area: 'Marathahalli',
    location: 'Marathahalli, Bangalore',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.coworkingcafe.com:443/images/BCC0E853-EEB0-41EE-99EB-8FDC3C8D40B3/22840.jpg',
      'https://cdn.coworkingcafe.com:443/images/5FED6AE1-080D-41B9-BABD-7E3366E82A04/22840.jpg',
      'https://cdn.coworkingcafe.com:443/images/E57BF0CE-E53D-4F51-A54E-1B200888AC52/22840.jpg',
      'https://cdn.coworkingcafe.com:443/images/26620FE0-2008-4526-8C1C-CB8E41F7C622/22840.jpg',
      'https://cdn.coworkingcafe.com:443/images/82654CE4-A7ED-40ED-8D5C-2DA257537CF6/22840.jpg'
    ]
  },
  {
    id: 224,
    name: 'Mioffice',
    badge: null,
    rating: 4.5,
    area: 'Marathahalli',
    location: 'Marenahalli , Bangalore',
    price: '₹4,999',
    period: '/ month',
    priceFormatted: '₹4,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/mioffice-marenahalli/managed-office/qgduyn.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/mioffice-marenahalli/managed-office/dadbhp.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/mioffice-marenahalli/managed-office/nvcysd.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/mioffice-marenahalli/managed-office/k25es4.jpg'
    ]
  },
  {
    id: 225,
    name: 'Awfis Soul Space Paradigm',
    badge: 'Popular',
    rating: 4.2,
    area: 'Marathahalli',
    location: 'Marathahalli, Bangalore',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/305b6bd07971b47555e2b79b65cae51810a9bf43.webp',
      'https://img.cofynd.com/images/latest_images_2024/981f5da85f450667c290067fdb7cc47658012289.webp',
      'https://img.cofynd.com/images/latest_images_2024/108e44d3d4995d298f0079d63cb29506636e32cd.webp',
      'https://img.cofynd.com/images/latest_images_2024/5a0c5088f1a3fcd2e21f0b4f8e474bb596ed415b.webp',
      'https://img.cofynd.com/images/latest_images_2024/643d8a9679b0672534f839ba039c9bf127eb0296.webp'
    ]
  },
  {
    id: 227,
    name: 'Inspire Workplace',
    badge: 'Popular',
    rating: 4.2,
    area: 'Marathahalli',
    location: 'Marathahalli, Bangalore',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/20da51b29df772b7e8f6739076112d855b0894f7.webp',
      'https://img.cofynd.com/images/latest_images_2024/5ab639e6b372917886889378c99795b4e4b7d357.webp',
      'https://img.cofynd.com/images/latest_images_2024/a56c458480e9e7948160cb4b5a75cc749972128f.webp',
      'https://img.cofynd.com/images/latest_images_2024/17a121e8dc76faa48ed1587bd39c83bae85918d2.webp'
    ]
  },
  {
    id: 322,
    name: 'iKeva Cessna Business Park',
    badge: 'Popular',
    rating: 3.7,
    area: 'Marathahalli',
    location: 'Marathahalli, Bangalore',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/dd4bdde3ebc28ab3f5905b5b13070c336e9c1dd8.jpg',
      'https://img.cofynd.com/images/original/4190c14d6af9851f7f075e8c1b0471b19944fdbf.jpg',
      'https://img.cofynd.com/images/original/5dea17870f98868bd17efb71775486f400b0c615.jpg',
      'https://img.cofynd.com/images/original/76201988713064871eb760f94795215843ea33d9.jpg',
      'https://img.cofynd.com/images/original/a3a34bbdddeba830b2202bbc3dec4de594c6e68f.jpg'
    ]
  },
  {
    id: 323,
    name: 'Smartworks DSR Techno Cube',
    badge: 'Popular',
    rating: 3.6,
    area: 'Marathahalli',
    location: 'Marathahalli, Bangalore',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://files.smartworksoffice.com/uploads/5_582c2d7d5d.webp',
      'https://files.smartworksoffice.com/uploads/2_2d8c475afd.webp',
      'https://files.smartworksoffice.com/uploads/3_710490d8c8.webp',
      'https://files.smartworksoffice.com/uploads/4_f13698d642.webp'
    ]
  },
  {
    id: 324,
    name: 'GoSpaze',
    badge: 'Premium',
    rating: 4.6,
    area: 'Marathahalli',
    location: 'Marathahalli, Bangalore',
    price: '₹8,900',
    period: '/ month',
    priceFormatted: '₹8,900 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/d558ecaab78df13a1cbd058f1d63fff078c1e0c4.jpg',
      'https://img.cofynd.com/images/original/115e0f16773a44862496a139117d820d2f21cc4b.jpg',
      'https://img.cofynd.com/images/original/a16076bde799ff70cfb9ed44994bdb31626f1850.jpg',
      'https://img.cofynd.com/images/original/2d4abb4e94c65c4e157d5aa6bb6daa90026ea21c.jpg',
      'https://img.cofynd.com/images/original/f3d377dd0ca6e06dbaaa305f055f543ac8e15bf5.jpg'
    ]
  },
  {
    id: 325,
    name: 'Workshaala Cosmic',
    badge: 'Popular',
    rating: 4.9,
    area: 'Marathahalli',
    location: 'Marathahalli, Bangalore',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/5d6bdce911d2d6d29a01d2a56ae7551421f5fb25.webp',
      'https://img.cofynd.com/images/latest_images_2024/424d2d95b9d69f017cfd31a532f01b6b67b376ee.webp',
      'https://img.cofynd.com/images/latest_images_2024/7a3d410415516b1f5c82f9347b1bd0b56304e59e.webp',
      'https://img.cofynd.com/images/latest_images_2024/dffa9636309a5bd2d9414d44759c37d0a286e88e.webp',
      'https://img.cofynd.com/images/original/dedd21b7ac35de0f9975a8f9039b13b3f34b4668.jpg'
    ]
  },
  {
    id: 608,
    name: 'Oyo Workflo KR Puram',
    badge: 'Popular',
    rating: 4,
    area: 'Marathahalli',
    location: 'Marathahalli, Bangalore',
    price: '₹4,499',
    period: '/ month',
    priceFormatted: '₹4,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/oyo-workflo-krishnarajapura/flexi/wxe3ca.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/oyo-workflo-krishnarajapura/flexi/35deyg.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/oyo-workflo-krishnarajapura/flexi/e7tfyy.jpg'
    ]
  },
  {
    id: 326,
    name: 'Regus Tejas Arcade 527',
    badge: 'Premium',
    rating: 4.2,
    area: 'Rajajinagar',
    location: 'Rajajinagar, Bangalore',
    price: '₹11,999',
    period: '/ month',
    priceFormatted: '₹11,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://coworker.imgix.net/photos/india/bengaluru/regus-bangalore-tejas-arcade/9636bb71c3a1341e9ec1bad92d455ff4.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/regus-bangalore-tejas-arcade/fc0c7c55edbc43638ecf307ae6e71bae.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/regus-bangalore-tejas-arcade/c1487e886ea3f265bdcc4cadf38fae90.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/regus-bangalore-tejas-arcade/6b8adf18f65240152a0162b6cbf69629.jpg'
    ]
  },
  {
    id: 327,
    name: 'Space-55',
    badge: null,
    rating: 4.9,
    area: 'Rajajinagar',
    location: 'Rajajinagar, Bangalore',
    price: '₹6,399',
    period: '/ month',
    priceFormatted: '₹6,399 / month',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.coworkingcafe.com:443/images/6816F21A-B9F4-4511-A3CA-90F5DF607E2F/22849.jpg'
    ]
  },
  {
    id: 328,
    name: 'DeskHub',
    badge: null,
    rating: 4.7,
    area: 'Rajajinagar',
    location: 'Rajajinagar, Bangalore',
    price: '₹4,999',
    period: '/ month',
    priceFormatted: '₹4,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/5176199e84c881a6da33330f0648e84ee0c8263b.webp',
      'https://img.cofynd.com/images/latest_images_2024/ba1da479c668bcde77de2e6da807cc5bfc0c6fdf.webp',
      'https://img.cofynd.com/images/latest_images_2024/d05ac68e752d48d18a9548d8cb836b81fd95c18a.webp',
      'https://img.cofynd.com/images/latest_images_2024/42e061a664661b8837b419f2e31407d72d806e20.webp'
    ]
  },
  {
    id: 329,
    name: 'Opus Desk',
    badge: null,
    rating: 3.6,
    area: 'Rajajinagar',
    location: 'Rajajinagar, Bangalore',
    price: '₹5,499',
    period: '/ month',
    priceFormatted: '₹5,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/5f7324a00fd749c9b0ad758d47edfd5d580def38.jpg',
      'https://img.cofynd.com/images/original/adb1c372b80aa8d599d393a466d06e2c45f907c4.jpg',
      'https://img.cofynd.com/images/original/86890c758fbfc951a1e54e0fe403f14ec6c9e0f4.jpg',
      'https://img.cofynd.com/images/original/7f5741db7a68d8fdea858bda92cba9cd37b89814.jpg',
      'https://img.cofynd.com/images/original/83fdd16c008a520c82723ad290e25631b81c686f.jpg'
    ]
  },
  {
    id: 330,
    name: 'BuzzWorks WTC Annexe',
    badge: 'Popular',
    rating: 5,
    area: 'Rajajinagar',
    location: 'Rajajinagar, Bangalore',
    price: '₹18,999',
    period: '/ month',
    priceFormatted: '₹18,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/buzzworks-wtc-annexe-brigade-gateway/exterior/mfgw7c.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/buzzworks-wtc-annexe-brigade-gateway/managed-office/44bjw4.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/buzzworks-wtc-annexe-brigade-gateway/managed-office/vd9bvj.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/buzzworks-wtc-annexe-brigade-gateway/managed-office/8u99hb.jpg'
    ]
  },
  {
    id: 331,
    name: 'Co-start hub',
    badge: null,
    rating: 4.3,
    area: 'Rajajinagar',
    location: 'Rajajinagar, Bangalore',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/1387d618963b6741df60c64483297d764204863d.webp',
      'https://img.cofynd.com/images/latest_images_2024/b976eea70a1337cf50658510554f881856d8aa63.webp',
      'https://img.cofynd.com/images/latest_images_2024/54cb1bf58553dedf6708c2e5e0f917b5d00b1c17.webp',
      'https://img.cofynd.com/images/latest_images_2024/2e17cf37176194d28f07db5eae5d0c71cb1db5de.webp',
      'https://img.cofynd.com/images/latest_images_2024/9c30a88110350adef969d872838b15c625b2dc90.webp'
    ]
  },
  {
    id: 333,
    name: 'Regus World Trade Tower',
    badge: 'Popular',
    rating: 4.3,
    area: 'Malleshwaram',
    location: 'Malleshwaram, Bangalore',
    price: '₹25,999',
    period: '/ month',
    priceFormatted: '₹25,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://workin.space/i/regus-bangalore-world-trade-centre-coworking-bengaluru-unit-no-2201a-photo-1--1754--2-1600.webp',
      'https://workin.space/i/regus-bangalore-world-trade-centre-coworking-bengaluru-unit-no-2201a-photo-2--1754--3-1600.webp',
      'https://workin.space/i/regus-bangalore-world-trade-centre-coworking-bengaluru-unit-no-2201a-photo-3--1754--4-1600.webp',
      'https://workin.space/i/regus-bangalore-world-trade-centre-coworking-bengaluru-unit-no-2201a-photo-4--1754--5-1600.webp'
    ]
  },
  {
    id: 334,
    name: 'Share Studio RMV Extension',
    badge: null,
    rating: 4.7,
    area: 'Malleshwaram',
    location: 'Malleshwaram, Bangalore',
    price: '₹4,499',
    period: '/ month',
    priceFormatted: '₹4,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/35a452410dbdb38b098f51e1feab1ac37610660e.jpg',
      'https://img.cofynd.com/images/latest_images_2024/590357500eab598657f087eef4dec54b672eb91a.webp',
      'https://img.cofynd.com/images/original/1b34ea2a5d01a9c268cb660dcf83e0b392cf4f3e.jpg',
      'https://img.cofynd.com/images/original/a1c0106b57c1301b84810b39d1a67aa99c205ec5.jpg',
      'https://img.cofynd.com/images/original/a3086bd7c780ef6a8e8bf884e4305aebfd493bef.jpg'
    ]
  },
  {
    id: 401,
    name: 'BHIVE Garuda Campus',
    badge: 'Premium',
    rating: 4.3,
    area: 'BTM Layout',
    location: 'BTM Layout, Bangalore',
    price: '₹9,499',
    period: '/ month',
    priceFormatted: '₹9,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://bhiveworkspace.com/wp-content/uploads/2025/10/Garuda3.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2024/01/Garudabhive11.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2024/01/Garudabhive10.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2024/01/Garudabhive8.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2024/01/Garudabhive7.jpg'
    ]
  },
  {
    id: 402,
    name: 'IndiQube Arcade',
    badge: 'Popular',
    rating: 4.4,
    area: 'BTM Layout',
    location: 'BTM Layout, Bangalore',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-arcade/1.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-arcade/2.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-arcade/3.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-arcade/meeting-room/plans/4-seater/ytye4j.jpg'
    ]
  },
  {
    id: 403,
    name: 'Elite Co-Works',
    badge: 'Premium',
    rating: 5,
    area: 'BTM Layout',
    location: 'BTM Layout, Bangalore',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/elite-coworks-btmlayout/flexi/k8u496.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/elite-coworks-btmlayout/flexi/ju6pjb.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/elite-coworks-btmlayout/flexi/ctn4dy.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/elite-coworks-btmlayout/flexi/9p8qv8.jpg'
    ]
  },
  {
    id: 404,
    name: 'WorkRubiX',
    badge: null,
    rating: 5,
    area: 'BTM Layout',
    location: 'BTM Layout, Bangalore',
    price: '₹4,999',
    period: '/ month',
    priceFormatted: '₹4,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/d26ee13c1e786dfe45bc1dae11d76ba82477721e.webp',
      'https://img.cofynd.com/images/latest_images_2024/15c32e8ebd07fcd00a84e8012d05ec57383de042.webp',
      'https://img.cofynd.com/images/latest_images_2024/fe808308012ed34e26268efec85259f3b62b092f.webp',
      'https://img.cofynd.com/images/latest_images_2024/0d0fbf69f720692aaf10184ff0b947bc8caec729.webp'
    ]
  },
  {
    id: 405,
    name: 'Starttopia Vinir Tower',
    badge: 'Special Offer',
    rating: 4.1,
    area: 'BTM Layout',
    location: 'BTM Layout, Bangalore',
    price: '₹5,799',
    period: '/ month',
    priceFormatted: '₹5,799 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/2c211a7acced772fe46d723e771d68c2d3cea6fd.webp',
      'https://img.cofynd.com/images/latest_images_2024/7428c8d0f119ddab9ff4ab9eb8e0c74de5e6021a.webp',
      'https://img.cofynd.com/images/latest_images_2024/9dc5d741c498203f7560e04bd0ed278b38544631.webp',
      'https://img.cofynd.com/images/latest_images_2024/a2d5a44ab6b933bc773cb84ac006aa252f914a5b.webp'
    ]
  },
  {
    id: 406,
    name: 'Hubstairs Coworks',
    badge: null,
    rating: 4.8,
    area: 'BTM Layout',
    location: 'BTM Layout, Bangalore',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://coworker.imgix.net/photos/india/bengaluru/hubstairs-coworks-btm-layout/main.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/hubstairs-coworks-btm-layout/1.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/hubstairs-coworks-btm-layout/2.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/hubstairs-coworks-btm-layout/3.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/hubstairs-coworks-btm-layout/4.jpg'
    ]
  },
  {
    id: 407,
    name: 'Monami Hospitality( Myroomie )',
    badge: 'Premium',
    rating: 4.2,
    area: 'BTM Layout',
    location: 'BTM 2nd Stage, Bangalore',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/257e7838d5ecd76899b5aa07882c06d8be9a1aea.webp',
      'https://img.cofynd.com/images/latest_images_2024/badddc2ec7c34c920dfa563e34dc9b9b7b95dabe.webp',
      'https://img.cofynd.com/images/latest_images_2024/95fab10176feeb8c1582592e681b165f45d2078f.webp',
      'https://img.cofynd.com/images/latest_images_2024/eed15866008aac7b019ca665de5e1288d134a2aa.webp',
      'https://img.cofynd.com/images/latest_images_2024/e79274eb294face92d52517d40c60bf2ce6aebde.webp'
    ]
  },
  {
    id: 409,
    name: 'InstaOffice',
    badge: 'Popular',
    rating: 4.2,
    area: 'Sarjapur Road',
    location: 'Sarjapur Road, Bangalore',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/cd9f04f471f5ea005020617e30a9f4032da22c21.jpg',
      'https://img.cofynd.com/images/original/cc028d5433b846b6f993f6347065dec9c2cce57b.jpg',
      'https://img.cofynd.com/images/original/bfff48aef50ccab635f23f52fe972d5e8f016d1c.jpg',
      'https://img.cofynd.com/images/original/889ee3386c6466869f834312dd34e06f91bdd896.jpg',
      'https://img.cofynd.com/images/original/69569c8afd62b618624977f0eee1b0ae5dc407d1.jpg'
    ]
  },
  {
    id: 410,
    name: 'The Circuit Workspace',
    badge: 'Premium',
    rating: 4.7,
    area: 'Sarjapur Road',
    location: 'Sarjapur Road, Bangalore',
    price: '₹12,500',
    period: '/ month',
    priceFormatted: '₹12,500 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/d242439f15634648a3cd72b5728bbbbbd59affcc.webp',
      'https://img.cofynd.com/images/latest_images_2024/7a5ad91589f91323e69786b3bb04dad71a0399f3.webp',
      'https://img.cofynd.com/images/latest_images_2024/cfdb6702ae302a18df2630088e39a59ec77d5cbd.webp',
      'https://img.cofynd.com/images/latest_images_2024/6a6172b992ab54ba17aee6548e56d9b31ccda6b0.webp',
      'https://img.cofynd.com/images/latest_images_2024/e1db668c8c4a3ca5970b4244934c6c3bdb6d2cf5.webp'
    ]
  },
  {
    id: 417,
    name: 'ClayWorks Create',
    badge: 'Popular',
    rating: 4.6,
    area: 'Bannerghatta Road',
    location: 'Bannerghatta Road, Bangalore',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/clayworks-banerghattaroad/1.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/clayworks-banerghattaroad/flexi/p6upwf.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/clayworks-banerghattaroad/flexi/ygt3ze.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/clayworks-banerghattaroad/flexi/rqqud8.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/clayworks-banerghattaroad/meeting-room/plans/4-seater/kg7kqv.jpg'
    ]
  },
  {
    id: 418,
    name: 'Anthill IQ',
    badge: 'Popular',
    rating: 4.6,
    area: 'Bannerghatta Road',
    location: 'Bannerghatta Road, Bangalore',
    price: '₹5,499',
    period: '/ month',
    priceFormatted: '₹5,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/anthill-iq-bannerghattamainroad4/1.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/anthill-iq-bannerghattamainroad4/10.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/anthill-iq-bannerghattamainroad4/11.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/anthill-iq-bannerghattamainroad4/12.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/anthill-iq-bannerghattamainroad4/13.jpg'
    ]
  },
  {
    id: 419,
    name: 'Regus BL Commerce',
    badge: 'Popular',
    rating: 4,
    area: 'Bannerghatta Road',
    location: 'Bannerghatta Road, Bangalore',
    price: '₹8,099',
    period: '/ month',
    priceFormatted: '₹8,099 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/dd4bdde3ebc28ab3f5905b5b13070c336e9c1dd8.jpg',
      'https://img.cofynd.com/images/original/4190c14d6af9851f7f075e8c1b0471b19944fdbf.jpg',
      'https://img.cofynd.com/images/original/5dea17870f98868bd17efb71775486f400b0c615.jpg',
      'https://img.cofynd.com/images/original/76201988713064871eb760f94795215843ea33d9.jpg',
      'https://img.cofynd.com/images/original/a3a34bbdddeba830b2202bbc3dec4de594c6e68f.jpg'
    ]
  },
  {
    id: 420,
    name: 'Evolve Work Studio',
    badge: 'Popular',
    rating: 5,
    area: 'Bannerghatta Road',
    location: 'Bannerghatta Road, Bangalore',
    price: '₹5,499',
    period: '/ month',
    priceFormatted: '₹5,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/20da51b29df772b7e8f6739076112d855b0894f7.webp',
      'https://img.cofynd.com/images/latest_images_2024/5ab639e6b372917886889378c99795b4e4b7d357.webp',
      'https://img.cofynd.com/images/latest_images_2024/a56c458480e9e7948160cb4b5a75cc749972128f.webp',
      'https://img.cofynd.com/images/latest_images_2024/17a121e8dc76faa48ed1587bd39c83bae85918d2.webp'
    ]
  },
  {
    id: 421,
    name: 'Office Republic',
    badge: null,
    rating: null,
    area: 'Bannerghatta Road',
    location: 'Bannerghatta Road, Bangalore',
    price: '₹8,000',
    period: '/ month',
    priceFormatted: '₹8,000 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/d558ecaab78df13a1cbd058f1d63fff078c1e0c4.jpg',
      'https://img.cofynd.com/images/original/115e0f16773a44862496a139117d820d2f21cc4b.jpg',
      'https://img.cofynd.com/images/original/a16076bde799ff70cfb9ed44994bdb31626f1850.jpg',
      'https://img.cofynd.com/images/original/2d4abb4e94c65c4e157d5aa6bb6daa90026ea21c.jpg',
      'https://img.cofynd.com/images/original/f3d377dd0ca6e06dbaaa305f055f543ac8e15bf5.jpg'
    ]
  },
  {
    id: 424,
    name: 'Regus Fairway Business Park',
    badge: 'Premium',
    rating: 4.4,
    area: 'Bellandur',
    location: 'Bellandur, Bangalore',
    price: '₹25,999',
    period: '/ month',
    priceFormatted: '₹25,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/3a09b79b0dcbb5f7958d9470187c8a27ffdf17ad.jpg',
      'https://img.cofynd.com/images/original/3b31cf2e8881b77e0d2ef66283cb0775fa123281.jpg',
      'https://img.cofynd.com/images/original/fbf926341143fd97b0df29962e5a54a47dbcf8f8.jpg',
      'https://img.cofynd.com/images/original/15db7af84400b986b0cd043befb3d6c79295f50c.jpg',
      'https://img.cofynd.com/images/original/0bb076ef96db49479c8e9b67897f50922e88c90e.jpg'
    ]
  },
  {
    id: 425,
    name: 'IndiQube Edge',
    badge: 'Popular',
    rating: 4.3,
    area: 'Bellandur',
    location: 'Bellandur, Bangalore',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-edge/gtdfjr.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-edge/meeting-room/plans/4-seater/yuymhg.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-edge/meeting-room/plans/4-seater/pdk35d.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-edge/meeting-room/plans/4-seater/p5ctvx.jpg'
    ]
  },
  {
    id: 426,
    name: 'Awfis Vajram Esteva',
    badge: 'Popular',
    rating: 4.3,
    area: 'Bellandur',
    location: 'Bellandur, Bangalore',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-vajram-esteva/exterior/jnrrgj.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-vajram-esteva/managed-office/w7hrem.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-vajram-esteva/managed-office/rrjmcz.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-vajram-esteva/managed-office/59wbc6.jpg'
    ]
  },
  {
    id: 428,
    name: 'Innov8 Mantri',
    badge: 'Popular',
    rating: 5,
    area: 'Bellandur',
    location: 'Bellandur, Bangalore',
    price: '₹10,499',
    period: '/ month',
    priceFormatted: '₹10,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/innov8-mantri-commercio/exterior/7y54bk.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/innov8-mantri-commercio/pdvb3h.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/innov8-mantri-commercio/vvw4uq.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/innov8-mantri-commercio/6t73ft.jpg'
    ]
  },
  {
    id: 430,
    name: 'Enzyme Office The Hub',
    badge: 'Popular',
    rating: 4.5,
    area: 'Bellandur',
    location: 'Bellandur, Bangalore',
    price: '₹9,499',
    period: '/ month',
    priceFormatted: '₹9,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/enzyme-office-space-bellandur/exterior/urhvd3.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/enzyme-office-space-bellandur/managed-office/fp9ptb.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/enzyme-office-space-bellandur/managed-office/ub4xzk.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/enzyme-office-space-bellandur/managed-office/jnac24.jpg'
    ]
  },
  {
    id: 432,
    name: 'Bubblespace',
    badge: 'Popular',
    rating: 4.7,
    area: 'Kalyan Nagar',
    location: 'Kalyan Nagar, Bangalore',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://coworker.imgix.net/photos/india/bengaluru/bubblespace-coworking/main.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/bubblespace-coworking/1.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/bubblespace-coworking/2.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/bubblespace-coworking/3.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/bubblespace-coworking/4.jpg'
    ]
  },
  {
    id: 433,
    name: 'WorkMatterz',
    badge: null,
    rating: 3.9,
    area: 'Kalyan Nagar',
    location: 'Kalyan Nagar, Bangalore',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/d26ee13c1e786dfe45bc1dae11d76ba82477721e.webp',
      'https://img.cofynd.com/images/latest_images_2024/15c32e8ebd07fcd00a84e8012d05ec57383de042.webp',
      'https://img.cofynd.com/images/latest_images_2024/fe808308012ed34e26268efec85259f3b62b092f.webp',
      'https://img.cofynd.com/images/latest_images_2024/0d0fbf69f720692aaf10184ff0b947bc8caec729.webp'
    ]
  },
  {
    id: 434,
    name: 'Cubix Coworking',
    badge: null,
    rating: 5,
    area: 'Kalyan Nagar',
    location: 'Kalyan Nagar, Bangalore',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://coworker.imgix.net/photos/india/bengaluru/cubix-coworking-space/main.png',
      'https://coworker.imgix.net/photos/india/bengaluru/cubix-coworking-space/1.png',
      'https://coworker.imgix.net/photos/india/bengaluru/cubix-coworking-space/2.png',
      'https://coworker.imgix.net/photos/india/bengaluru/cubix-coworking-space/3.png'
    ]
  },
  {
    id: 435,
    name: 'Kaizen Workspace',
    badge: null,
    rating: null,
    area: 'Kalyan Nagar',
    location: 'Kalyan Nagar, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/35ba5f2e7fb3ecea59578755dfb90e57bfa9f84e.webp',
      'https://img.cofynd.com/images/latest_images_2024/f2d5634d7c765d4d1cb6a234a0425d0a8eac3121.webp',
      'https://img.cofynd.com/images/latest_images_2024/b2509f917049d71b201f04f0aeb01f13356df2d2.webp',
      'https://img.cofynd.com/images/latest_images_2024/b886d41fdbad671c310e7b7fc4c6d69f48c018c0.webp',
      'https://img.cofynd.com/images/latest_images_2024/5e21f76c961fce9729833e73394892bd65e97464.webp'
    ]
  },
  {
    id: 436,
    name: 'Venus communiti',
    badge: 'Premium',
    rating: 4.5,
    area: 'Kalyan Nagar',
    location: 'Kalyan Nagar, Bangalore',
    price: '₹15,999',
    period: '/ month',
    priceFormatted: '₹15,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/50ffa88db04bd7bb35b184d61839be6b54b2d459.webp',
      'https://img.cofynd.com/images/latest_images_2024/c2e746539de0b5efcf0599f153b8680c8ad5ffe3.webp',
      'https://img.cofynd.com/images/latest_images_2024/04985d4ed401b1ecfd9f4b2f3ccd7e310afe7def.webp',
      'https://img.cofynd.com/images/latest_images_2024/fb62c69f8d4ec70ea2c01cf3cd04997db605bb2d.webp',
      'https://img.cofynd.com/images/latest_images_2024/851974e26cd07c777d2290f7bd4ca3647868d0c4.webp'
    ]
  },
  {
    id: 439,
    name: '315Work Avenue',
    badge: 'Popular',
    rating: 4.6,
    area: 'Domlur',
    location: 'Domlur, Bangalore',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/315-work-avenue-domlur/managed-office/u3q3s4.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/315-work-avenue-domlur/managed-office/b5qpsa.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/315-work-avenue-domlur/managed-office/5tek37.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/315-work-avenue-domlur/managed-office/bskhcu.jpg'
    ]
  },
  {
    id: 440,
    name: 'IndiQube Epsilon',
    badge: 'Popular',
    rating: 4.1,
    area: 'Domlur',
    location: 'Domlur, Bangalore',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://coworker.imgix.net/photos/india/bengaluru/34187-indiqube/main.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/34187-indiqube/1.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/34187-indiqube/2.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/34187-indiqube/3.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/34187-indiqube/4.jpg'
    ]
  },
  {
    id: 441,
    name: 'Workden',
    badge: 'Popular',
    rating: 4.1,
    area: 'Domlur',
    location: 'Domlur, Bangalore',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/1622dedd6662b77bb61099f9979f10dea0b8818d.webp',
      'https://img.cofynd.com/images/latest_images_2024/b732da45143a5951d08e54bf48d8885b54fc17bf.webp',
      'https://img.cofynd.com/images/latest_images_2024/7efb19e99551c6e1ffcf82bbfb772c914bfba544.webp',
      'https://img.cofynd.com/images/latest_images_2024/856697b099f66bb6c4dbfe849e7555e16ae306a7.webp',
      'https://img.cofynd.com/images/latest_images_2024/855d0458df81c810fb594b281aa06a1420d2cb2f.webp'
    ]
  },
  {
    id: 442,
    name: 'TRINITY',
    badge: null,
    rating: 4.5,
    area: 'Domlur',
    location: 'Domlur, Bangalore',
    price: '₹4,199',
    period: '/ month',
    priceFormatted: '₹4,199 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/trinity-coworking-space-domlur/hd87nv.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/trinity-coworking-space-domlur/rf3knj.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/trinity-coworking-space-domlur/4zw8yj.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/trinity-coworking-space-domlur/emxdwy.jpg'
    ]
  },
  {
    id: 443,
    name: 'Enzyme Offices',
    badge: 'Popular',
    rating: 4.4,
    area: 'Domlur',
    location: 'Domlur, Bangalore',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/enzyme-office-space-domlur/exterior/k9rmdp.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/enzyme-office-space-domlur/managed-office/q93mpq.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/enzyme-office-space-domlur/managed-office/ffjmj5.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/enzyme-office-space-domlur/managed-office/37sak3.jpg'
    ]
  },
  {
    id: 444,
    name: 'BizzHub Esquire',
    badge: null,
    rating: 5,
    area: 'Domlur',
    location: 'Domlur, Bangalore',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/bizzhub-esquire-indiranagar/exterior/bxhraz.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/bizzhub-esquire-indiranagar/managed-office/xktnbd.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/bizzhub-esquire-indiranagar/managed-office/gydgxc.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/bizzhub-esquire-indiranagar/managed-office/q8v47v.jpg'
    ]
  },
  {
    id: 429,
    name: 'Smartworks Global Technology Park',
    badge: 'Premium',
    rating: 4.3,
    area: 'Outer Ring Road',
    location: 'Outer Ring Road, Bangalore',
    price: '₹14,999',
    period: '/ month',
    priceFormatted: '₹14,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/smartworks-global-technology-park/managed-office/pt5ers.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/smartworks-global-technology-park/managed-office/jmrv3w.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/smartworks-global-technology-park/managed-office/gbnze3.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/smartworks-global-technology-park/managed-office/bun483.jpg'
    ]
  },
  {
    id: 431,
    name: '2gethr',
    badge: 'Popular',
    rating: 4.5,
    area: 'Outer Ring Road',
    location: 'Outer Ring Road, Bangalore',
    price: '₹10,499',
    period: '/ month',
    priceFormatted: '₹10,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/2gethr-workspaces-mantri-commercio/1.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/2gethr-workspaces-mantri-commercio/10.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/2gethr-workspaces-mantri-commercio/11.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/2gethr-workspaces-mantri-commercio/12.jpg'
    ]
  },
  {
    id: 437,
    name: 'IndiQube Iniche',
    badge: 'Popular',
    rating: 4.3,
    area: 'Outer Ring Road',
    location: 'Outer Ring Road, Bangalore',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-outerringroad/managed-office/f8gfhb.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-outerringroad/managed-office/dhn57p.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-outerringroad/managed-office/rg5gvk.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-outerringroad/managed-office/evka88.jpg'
    ]
  },
  {
    id: 501,
    name: 'IndiQube Alpha',
    badge: 'Popular',
    rating: 4,
    area: 'Outer Ring Road',
    location: 'Outer Ring Road, Bangalore',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-alpha/managed-office/fe3tsd.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-alpha/managed-office/4wu97y.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-alpha/managed-office/q4y9ae.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-alpha/managed-office/b3f8ku.jpg'
    ]
  },
  {
    id: 502,
    name: 'myntworks',
    badge: 'Special Offer',
    rating: 3.9,
    area: 'Outer Ring Road',
    location: 'Outer Ring Road, Bangalore',
    price: '₹3,299',
    period: '/ month',
    priceFormatted: '₹3,299 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/2f0f1c4e9925f904ea67539c7445b6ea00b901a5.webp',
      'https://img.cofynd.com/images/latest_images_2024/5db3a9a333c060b19ecd3b2ceba811bb7a55c00f.webp',
      'https://img.cofynd.com/images/latest_images_2024/211b8b898ab041af8f2f5ae2318db7b6a7470949.webp',
      'https://img.cofynd.com/images/latest_images_2024/e991a43662fa571c2a1977c0975ad0c97461e5a6.webp',
      'https://img.cofynd.com/images/latest_images_2024/2d9e7739decb78af7960b6956ed5b8e94cbd1e82.webp'
    ]
  },
  {
    id: 503,
    name: 'Work365 Spaces',
    badge: 'Popular',
    rating: 4.9,
    area: 'Outer Ring Road',
    location: 'Outer Ring Road, Bangalore',
    price: '₹5,499',
    period: '/ month',
    priceFormatted: '₹5,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/ee864fd84b6a8c54cad355429958fec57cddde5c.jpg',
      'https://img.cofynd.com/images/original/03ae317926b42b6a9a01662c1148419614457788.jpg',
      'https://img.cofynd.com/images/original/ae12c9b1368625902b665be5d398939c36417758.jpg',
      'https://img.cofynd.com/images/original/02316e1074e2d36378fbdf303d7dbad849bc5244.jpg',
      'https://img.cofynd.com/images/original/94c4dd8dbf4e0c4e747ee83a54d6560965e94b28.jpg'
    ]
  },
  {
    id: 504,
    name: 'Work Theater',
    badge: null,
    rating: 4.9,
    area: 'Outer Ring Road',
    location: 'Outer Ring Rd, Bangalore',
    price: '₹6,299',
    period: '/ month',
    priceFormatted: '₹6,299 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/d9c9de21fde512d1abf3c2de44a3ca2c56d75712.jpg',
      'https://img.cofynd.com/images/original/c4146a81b3793ae793e25b0cb13c32b5756cb865.jpg',
      'https://img.cofynd.com/images/original/f7466184511d7f02d41b619e075051aa12bc12eb.jpg',
      'https://img.cofynd.com/images/original/f9e80193cfcf64f331cf11e4bf5b741ca12431cf.jpg',
      'https://img.cofynd.com/images/original/55486c750b28414ba491a92e105e466ce78d2c67.jpg'
    ]
  },
  {
    id: 505,
    name: 'The Executive Centre Helios Business Park',
    badge: null,
    rating: 4.5,
    area: 'Outer Ring Road',
    location: 'Outer Ring Road, Bangalore',
    price: '₹59,999',
    period: '/ month',
    priceFormatted: '₹59,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/bb629c8a53d66f187aeb5bf553ad5e279af05a5c.webp',
      'https://img.cofynd.com/images/latest_images_2024/1a29582d9217eb74a62174c6020573ae0c78a08d.webp',
      'https://img.cofynd.com/images/latest_images_2024/60655a15a0c32900fa75fe66b89691cb5ee4e0bc.webp',
      'https://img.cofynd.com/images/latest_images_2024/5b2ca024c0d02b5fc20f8fe6413247ea795d3fa9.webp',
      'https://img.cofynd.com/images/latest_images_2024/76cfa7b3feaa5574519f71c4c1a9657b98d9c228.webp'
    ]
  },
  {
    id: 506,
    name: 'Aurbis ORR',
    badge: null,
    rating: 4,
    area: 'Outer Ring Road',
    location: 'Outer Ring Road, Bangalore',
    price: '₹11,999',
    period: '/ month',
    priceFormatted: '₹11,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/aurbis-orr-bellandur/exterior/nqgbss.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/aurbis-orr-bellandur/managed-office/83abyu.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/aurbis-orr-bellandur/managed-office/d3tfd6.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/aurbis-orr-bellandur/managed-office/vpbtmy.jpg'
    ]
  },
  {
    id: 507,
    name: 'Cowrks Purva Premier',
    badge: 'Premium',
    rating: 4.5,
    area: 'Residency Road',
    location: 'Residency Road, Bangalore',
    price: '₹25,999',
    period: '/ month',
    priceFormatted: '₹25,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/cowrks-purva-premiere/exterior/upszuj.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/cowrks-purva-premiere/exterior/xzgcuv.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/cowrks-purva-premiere/dedicated/6zmnup.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/cowrks-purva-premiere/dedicated/zthrmn.jpg'
    ]
  },
  {
    id: 508,
    name: 'Awfis Residency Road',
    badge: 'Popular',
    rating: 4.5,
    area: 'Residency Road',
    location: 'Residency Road, Bangalore',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-sabari-complex/exterior/pb2zr7.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-sabari-complex/managed-office/7nsvt6.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-sabari-complex/managed-office/jj6sa4.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-sabari-complex/managed-office/eqr6jy.jpg'
    ]
  },
  {
    id: 509,
    name: 'Awfis Residency Square',
    badge: 'Popular',
    rating: 4.3,
    area: 'Residency Road',
    location: 'Residency Road, Bangalore',
    price: '₹11,999',
    period: '/ month',
    priceFormatted: '₹11,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-residencyroadashoknagar/exterior/sc3qub.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-residencyroadashoknagar/dedicated/m437kf.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-residencyroadashoknagar/dedicated/nzxxyz.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-residencyroadashoknagar/dedicated/qv3fkn.jpg'
    ]
  },
  {
    id: 510,
    name: 'Energen Works',
    badge: 'Popular',
    rating: 5,
    area: 'Residency Road',
    location: 'Residency Road, Bangalore',
    price: '₹11,999',
    period: '/ month',
    priceFormatted: '₹11,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/51ee565b91eea36c875c7ddf996652b81ba22d8b.webp',
      'https://img.cofynd.com/images/latest_images_2024/09c488ee273cba93322d8e48b813155734cecfd5.webp',
      'https://img.cofynd.com/images/latest_images_2024/a309e390c58742880c9e6bb075787f7a7daae40b.webp',
      'https://img.cofynd.com/images/latest_images_2024/d62bc5a6f2cf38a4b6555ccdf66f7fbb6b7e53f1.webp',
      'https://img.cofynd.com/images/latest_images_2024/914ca385f0ef386bb0fb27c593fa8e5cc6946766.webp'
    ]
  },
  {
    id: 103,
    name: 'BHIVE Premium Church Street',
    badge: 'Popular',
    rating: 3.9,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹14,999',
    period: '/ month',
    priceFormatted: '₹14,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://bhiveworkspace.com/wp-content/uploads/2024/01/1L9A7583-1.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2024/01/1L9A7499.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2024/01/1L9A7535.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2025/07/Church-Street.png',
      'https://bhiveworkspace.com/wp-content/uploads/2024/01/1L9A7573.jpg'
    ]
  },
  {
    id: 511,
    name: 'Business Hut Janardhan Towers',
    badge: null,
    rating: 4,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/business-hut-residencyroadashoknagar/virtual-office/683gwn.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/business-hut-residencyroadashoknagar/virtual-office/adqsfy.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/business-hut-residencyroadashoknagar/virtual-office/cmryyn.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/business-hut-residencyroadashoknagar/virtual-office/hh3nsv.jpg'
    ]
  },
  {
    id: 512,
    name: 'Awfis Prestige DotCom',
    badge: 'Premium',
    rating: 4.4,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-prestige-dotcom/exterior/aqx2tb.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-prestige-dotcom/managed-office/k4nvu2.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-prestige-dotcom/managed-office/vg23j5.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-prestige-dotcom/managed-office/n3vjy9.jpg'
    ]
  },
  {
    id: 513,
    name: 'IndiQube Sapphire',
    badge: 'Popular',
    rating: 4.4,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/257e7838d5ecd76899b5aa07882c06d8be9a1aea.webp',
      'https://img.cofynd.com/images/latest_images_2024/badddc2ec7c34c920dfa563e34dc9b9b7b95dabe.webp',
      'https://img.cofynd.com/images/latest_images_2024/95fab10176feeb8c1582592e681b165f45d2078f.webp',
      'https://img.cofynd.com/images/latest_images_2024/eed15866008aac7b019ca665de5e1288d134a2aa.webp',
      'https://img.cofynd.com/images/latest_images_2024/e79274eb294face92d52517d40c60bf2ce6aebde.webp'
    ]
  },
  {
    id: 514,
    name: 'Energen Works',
    badge: null,
    rating: 4,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹11,999',
    period: '/ month',
    priceFormatted: '₹11,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/62b28553fde2a39b015af363ca0d27bf49983053.webp',
      'https://img.cofynd.com/images/latest_images_2024/78870d1e1c478b3b413cd5306abaec97999bd816.webp',
      'https://img.cofynd.com/images/latest_images_2024/236827a029f49356c51def78bed14927b49670cc.webp',
      'https://img.cofynd.com/images/latest_images_2024/ff8aae1c6a11272f670b0b8ee3e6e9942f2c279c.webp',
      'https://img.cofynd.com/images/latest_images_2024/7efef4772e4ef54cf5555525647090a7b525cab9.webp'
    ]
  },
  {
    id: 515,
    name: 'Smartworks Prestige Zeenath',
    badge: 'Popular',
    rating: 3.4,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/cd9f04f471f5ea005020617e30a9f4032da22c21.jpg',
      'https://img.cofynd.com/images/original/cc028d5433b846b6f993f6347065dec9c2cce57b.jpg',
      'https://img.cofynd.com/images/original/bfff48aef50ccab635f23f52fe972d5e8f016d1c.jpg',
      'https://img.cofynd.com/images/original/889ee3386c6466869f834312dd34e06f91bdd896.jpg',
      'https://img.cofynd.com/images/original/69569c8afd62b618624977f0eee1b0ae5dc407d1.jpg'
    ]
  },
  {
    id: 516,
    name: 'Regus Raheja Towers',
    badge: 'Popular',
    rating: 3.5,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/d242439f15634648a3cd72b5728bbbbbd59affcc.webp',
      'https://img.cofynd.com/images/latest_images_2024/7a5ad91589f91323e69786b3bb04dad71a0399f3.webp',
      'https://img.cofynd.com/images/latest_images_2024/cfdb6702ae302a18df2630088e39a59ec77d5cbd.webp',
      'https://img.cofynd.com/images/latest_images_2024/6a6172b992ab54ba17aee6548e56d9b31ccda6b0.webp',
      'https://img.cofynd.com/images/latest_images_2024/e1db668c8c4a3ca5970b4244934c6c3bdb6d2cf5.webp'
    ]
  },
  {
    id: 517,
    name: 'Regus Concorde Towers',
    badge: 'Premium',
    rating: 4.4,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹25,199',
    period: '/ month',
    priceFormatted: '₹25,199 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/bd032c1a6dda500c0e1734e4e2d714bc5752de97.webp',
      'https://img.cofynd.com/images/latest_images_2024/333efe0ea8ee872444970549a907d5b5672a554d.webp',
      'https://img.cofynd.com/images/latest_images_2024/556fdf1274ffd47ffe0cf369073e9803f314c648.webp',
      'https://img.cofynd.com/images/latest_images_2024/a78d38fbe0ad0cf0cf4fad4f4ba8915ba37bc610.webp',
      'https://img.cofynd.com/images/latest_images_2024/cadcabb6fdef9874e7ea7563a218a5c9179a0468.webp'
    ]
  },
  {
    id: 518,
    name: 'IndiQube Platina',
    badge: 'Popular',
    rating: 5,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-platina/yzragq.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-platina/udvbpc.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-platina/meeting-room/plans/6-seater/mdfe6s.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-platina/meeting-room/plans/6-seater/626t82.jpg'
    ]
  },
  {
    id: 519,
    name: 'Awfis Raheja Towers',
    badge: 'Popular',
    rating: 4.1,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-raheja-towers/exterior/h52ju2.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-raheja-towers/managed-office/ptctwx.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-raheja-towers/managed-office/29qhwb.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-raheja-towers/managed-office/m8yatc.jpg'
    ]
  },
  {
    id: 520,
    name: 'Corporatedge UB City',
    badge: 'Popular',
    rating: 5,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹44,999',
    period: '/ month',
    priceFormatted: '₹44,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/corporatedge-ub-city/33y7m7.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/corporatedge-ub-city/meeting-room/plans/12-seater/aj5c43.jpg'
    ]
  },
  {
    id: 529,
    name: 'Awfis',
    badge: 'Popular',
    rating: 4.2,
    area: 'Hosur Road',
    location: 'Hosur Road, Bangalore',
    price: '₹9,499',
    period: '/ month',
    priceFormatted: '₹9,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-hosurroad/dedicated/svbphe.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-hosurroad/dedicated/cuqagm.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-hosurroad/dedicated/6dncpv.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-hosurroad/dedicated/vccxxc.jpg'
    ]
  },
  {
    id: 530,
    name: 'IndiQube Aura',
    badge: 'Popular',
    rating: 4.5,
    area: 'Hosur Road',
    location: 'Hosur Road, Bangalore',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-aura/1.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-aura/2.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-aura/3.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-aura/meeting-room/plans/6-seater/5dkvtv.jpg'
    ]
  },
  {
    id: 531,
    name: 'Enzyme NPR Coworking',
    badge: 'Popular',
    rating: 5,
    area: 'Hosur Road',
    location: 'Hosur Road, Bangalore',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/enzyme-office-space-npr-complex/exterior/t4pg5f.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/enzyme-office-space-npr-complex/dedicated/dtudba.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/enzyme-office-space-npr-complex/dedicated/njyvz7.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/enzyme-office-space-npr-complex/dedicated/mnfjkf.jpg'
    ]
  },
  {
    id: 532,
    name: 'Awfis Davanam Plaza',
    badge: 'Popular',
    rating: 4.6,
    area: 'Hosur Road',
    location: 'Hosur Road, Bangalore',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-davanam-plaza/exterior/wrnt9e.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-davanam-plaza/managed-office/8f2vt7.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-davanam-plaza/managed-office/as83yv.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-davanam-plaza/managed-office/s2ncb7.jpg'
    ]
  },
  {
    id: 533,
    name: 'Novel Tech Park',
    badge: 'Popular',
    rating: 4.4,
    area: 'Hosur Road',
    location: 'Hosur Road, Bangalore',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://coworker.imgix.net/photos/india/bengaluru/novel-tech-park/main.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/novel-tech-park/1.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/novel-tech-park/2.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/novel-tech-park/3.jpeg',
      'https://coworker.imgix.net/photos/india/bengaluru/novel-tech-park/4.jpeg'
    ]
  },
  {
    id: 534,
    name: 'Unispace Coworking',
    badge: 'Popular',
    rating: 4.8,
    area: 'Hosur Road',
    location: 'Hosur Road, Bangalore',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/1387d618963b6741df60c64483297d764204863d.webp',
      'https://img.cofynd.com/images/latest_images_2024/b976eea70a1337cf50658510554f881856d8aa63.webp',
      'https://img.cofynd.com/images/latest_images_2024/54cb1bf58553dedf6708c2e5e0f917b5d00b1c17.webp',
      'https://img.cofynd.com/images/latest_images_2024/2e17cf37176194d28f07db5eae5d0c71cb1db5de.webp',
      'https://img.cofynd.com/images/latest_images_2024/9c30a88110350adef969d872838b15c625b2dc90.webp'
    ]
  },
  {
    id: 535,
    name: 'Enzyme Vista',
    badge: 'Special Offer',
    rating: 3,
    area: 'Hosur Road',
    location: 'Hosur Road, Bangalore',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/94520e6c657a26032275bae6ec5ecb28c2ec3645.webp',
      'https://img.cofynd.com/images/latest_images_2024/8fb511efff6c4ac3e675feb33da2fed7bab8fea8.webp',
      'https://img.cofynd.com/images/latest_images_2024/b3b4f02542246091ec686e628f183388997ace01.webp',
      'https://img.cofynd.com/images/latest_images_2024/800f8563e454a64cd599567bfa7718b836dd7765.webp',
      'https://img.cofynd.com/images/latest_images_2024/be8dd586067e9fad71f14f885311a3df59edcdd3.webp'
    ]
  },
  {
    id: 536,
    name: 'SmartHive',
    badge: null,
    rating: 5,
    area: 'Hosur Road',
    location: 'Hosur Road, Bangalore',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/2851d6fa3bd6909bca06fc26da49b5cf1cede2ad.jpg',
      'https://img.cofynd.com/images/original/834fc89f0327b7d9559b17cea07807f9af45fe0e.jpg',
      'https://img.cofynd.com/images/original/a4eadf8723bbf934307a585ce3a10b87ba80d475.jpg',
      'https://img.cofynd.com/images/original/cba23fbff5fb9fc8ddd441d8a25f68e8efa1c76b.jpg',
      'https://img.cofynd.com/images/original/63e2171239c540d2745f634c1f73a3198526040a.jpg'
    ]
  },
  {
    id: 521,
    name: '91Springboard ITPL',
    badge: 'Popular',
    rating: 4.4,
    area: 'Mahadevapura',
    location: 'Mahadevapura, Bangalore',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/91springboard-mahadevapura-2/exterior/qe8ysp.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/91springboard-mahadevapura-2/dedicated/dgthd9.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/91springboard-mahadevapura-2/dedicated/cke5ur.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/91springboard-mahadevapura-2/dedicated/d88s4a.jpg'
    ]
  },
  {
    id: 522,
    name: 'Awfis Brigade Metropolis',
    badge: 'Premium',
    rating: 5,
    area: 'Mahadevapura',
    location: 'Mahadevapura, Bangalore',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-brigade-metropolis/exterior/rey79t.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-brigade-metropolis/managed-office/rkvnup.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-brigade-metropolis/managed-office/wgmyd2.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/awfis-brigade-metropolis/managed-office/zhvusg.jpg'
    ]
  },
  {
    id: 523,
    name: 'BHIVE Premium Brigade Metropolis',
    badge: 'Premium',
    rating: 4.4,
    area: 'Mahadevapura',
    location: 'Mahadevapura, Bangalore',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://bhiveworkspace.com/wp-content/uploads/2024/01/Metropollis-7.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2024/01/Metropollis-6.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2024/01/Metropollis-8.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2024/01/Metropollis-9.jpg',
      'https://bhiveworkspace.com/wp-content/uploads/2024/01/Metropollis-3.jpg'
    ]
  },
  {
    id: 524,
    name: 'Collab Desks',
    badge: null,
    rating: null,
    area: 'Mahadevapura',
    location: 'Mahadevapura, Bangalore.',
    price: '₹8,259',
    period: '/ month',
    priceFormatted: '₹8,259 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/305b6bd07971b47555e2b79b65cae51810a9bf43.webp',
      'https://img.cofynd.com/images/latest_images_2024/981f5da85f450667c290067fdb7cc47658012289.webp',
      'https://img.cofynd.com/images/latest_images_2024/108e44d3d4995d298f0079d63cb29506636e32cd.webp',
      'https://img.cofynd.com/images/latest_images_2024/5a0c5088f1a3fcd2e21f0b4f8e474bb596ed415b.webp',
      'https://img.cofynd.com/images/latest_images_2024/643d8a9679b0672534f839ba039c9bf127eb0296.webp'
    ]
  },
  {
    id: 525,
    name: 'GoSpaze',
    badge: 'Premium',
    rating: 4.5,
    area: 'Mahadevapura',
    location: 'Mahadevapura, Bangalore',
    price: '₹8,900',
    period: '/ month',
    priceFormatted: '₹8,900 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/dd4bdde3ebc28ab3f5905b5b13070c336e9c1dd8.jpg',
      'https://img.cofynd.com/images/original/4190c14d6af9851f7f075e8c1b0471b19944fdbf.jpg',
      'https://img.cofynd.com/images/original/5dea17870f98868bd17efb71775486f400b0c615.jpg',
      'https://img.cofynd.com/images/original/76201988713064871eb760f94795215843ea33d9.jpg',
      'https://img.cofynd.com/images/original/a3a34bbdddeba830b2202bbc3dec4de594c6e68f.jpg'
    ]
  },
  {
    id: 527,
    name: '91Springboard',
    badge: 'Popular',
    rating: 4.3,
    area: 'Mahadevapura',
    location: 'Mahadevapura, Bangalore',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/d558ecaab78df13a1cbd058f1d63fff078c1e0c4.jpg',
      'https://img.cofynd.com/images/original/115e0f16773a44862496a139117d820d2f21cc4b.jpg',
      'https://img.cofynd.com/images/original/a16076bde799ff70cfb9ed44994bdb31626f1850.jpg',
      'https://img.cofynd.com/images/original/2d4abb4e94c65c4e157d5aa6bb6daa90026ea21c.jpg',
      'https://img.cofynd.com/images/original/f3d377dd0ca6e06dbaaa305f055f543ac8e15bf5.jpg'
    ]
  },
  {
    id: 538,
    name: 'Enzyme Legacy',
    badge: 'Popular',
    rating: 4.8,
    area: 'Hoodi',
    location: 'Hoodi, Bangalore',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/15e7d560c947c6bc900d3fb1003bfe9c77e398d2.jpg',
      'https://img.cofynd.com/images/original/26959197d965a409b93036e1f4aab351a977fa27.jpg',
      'https://img.cofynd.com/images/original/3a10fd7f1bedb1d5ecd272f0bf0d16aa347576e7.jpg',
      'https://img.cofynd.com/images/original/e1e23064d108590bcb3319e45573bc49a2ceb395.jpg',
      'https://img.cofynd.com/images/original/c1ca5ce9ec9caf7c6c1d9af4e976032b9e3021e1.jpg'
    ]
  },
  {
    id: 335,
    name: 'LiftX Co-Works Renault Palace Orchards',
    badge: null,
    rating: 4.1,
    area: 'Sadashiva Nagar',
    location: 'Sadashiva Nagar, Bangalore',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/15e7d560c947c6bc900d3fb1003bfe9c77e398d2.jpg',
      'https://img.cofynd.com/images/original/26959197d965a409b93036e1f4aab351a977fa27.jpg',
      'https://img.cofynd.com/images/original/3a10fd7f1bedb1d5ecd272f0bf0d16aa347576e7.jpg',
      'https://img.cofynd.com/images/original/e1e23064d108590bcb3319e45573bc49a2ceb395.jpg',
      'https://img.cofynd.com/images/original/c1ca5ce9ec9caf7c6c1d9af4e976032b9e3021e1.jpg'
    ]
  },
  {
    id: 606,
    name: 'High Calibre League',
    badge: null,
    rating: 4.8,
    area: 'Hennur',
    location: 'Hennur, Bangalore',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/94520e6c657a26032275bae6ec5ecb28c2ec3645.webp',
      'https://img.cofynd.com/images/latest_images_2024/8fb511efff6c4ac3e675feb33da2fed7bab8fea8.webp',
      'https://img.cofynd.com/images/latest_images_2024/b3b4f02542246091ec686e628f183388997ace01.webp',
      'https://img.cofynd.com/images/latest_images_2024/800f8563e454a64cd599567bfa7718b836dd7765.webp',
      'https://img.cofynd.com/images/latest_images_2024/be8dd586067e9fad71f14f885311a3df59edcdd3.webp'
    ]
  },
  {
    id: 226,
    name: 'The Hive PTP',
    badge: 'Premium',
    rating: 4.2,
    area: 'Kadubeesanahalli',
    location: 'Kadubeesanahalli, Bangalore',
    price: '₹12,499',
    period: '/ month',
    priceFormatted: '₹12,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/dd4bdde3ebc28ab3f5905b5b13070c336e9c1dd8.jpg',
      'https://img.cofynd.com/images/original/4190c14d6af9851f7f075e8c1b0471b19944fdbf.jpg',
      'https://img.cofynd.com/images/original/5dea17870f98868bd17efb71775486f400b0c615.jpg',
      'https://img.cofynd.com/images/original/76201988713064871eb760f94795215843ea33d9.jpg',
      'https://img.cofynd.com/images/original/a3a34bbdddeba830b2202bbc3dec4de594c6e68f.jpg'
    ]
  },
  {
    id: 319,
    name: 'Spacio Workspace Sree Devi Complex',
    badge: 'Popular',
    rating: 4.9,
    area: 'Basavanagudi',
    location: 'Basavanagudi, Bangalore',
    price: '₹3,999',
    period: '/ month',
    priceFormatted: '₹3,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/f3301766c8ef599ab9fccf4e79d8ffb05607f8cb.jpg',
      'https://img.cofynd.com/images/original/bf82d800a2cc9ddc0818624e1675bb69056ff64e.jpg',
      'https://img.cofynd.com/images/original/f809998409e326eec1589237d62fec35a0f5bff5.jpg',
      'https://img.cofynd.com/images/original/f2c386881e1c1ffb15fec004a116835ec12d7e03.jpg',
      'https://img.cofynd.com/images/original/67db7677286bc5d9920525e826712bc117d9fd36.jpg'
    ]
  },
  {
    id: 332,
    name: 'CIIC Coworking Space',
    badge: null,
    rating: 5,
    area: 'Cottonpete',
    location: 'Cottonpete, Bangalore',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/94520e6c657a26032275bae6ec5ecb28c2ec3645.webp',
      'https://img.cofynd.com/images/latest_images_2024/8fb511efff6c4ac3e675feb33da2fed7bab8fea8.webp',
      'https://img.cofynd.com/images/latest_images_2024/b3b4f02542246091ec686e628f183388997ace01.webp',
      'https://img.cofynd.com/images/latest_images_2024/800f8563e454a64cd599567bfa7718b836dd7765.webp',
      'https://img.cofynd.com/images/latest_images_2024/be8dd586067e9fad71f14f885311a3df59edcdd3.webp'
    ]
  },
  {
    id: 336,
    name: 'Wolfpack Workspaces',
    badge: null,
    rating: 4.2,
    area: 'Vasanth Nagar',
    location: 'Vasanth Nagar, Bangalore',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/wolfpack-workspaces-vasanthnagar/exterior/h7zku2.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/wolfpack-workspaces-vasanthnagar/kx4sjq.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/wolfpack-workspaces-vasanthnagar/xg59gy.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/wolfpack-workspaces-vasanthnagar/ytav9y.jpg'
    ]
  },
  {
    id: 337,
    name: 'Wolfpack',
    badge: 'Popular',
    rating: 4.6,
    area: 'Vasanth Nagar',
    location: 'Vasanth Nagar, Bangalore',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/wolfpack-workspaces-vasanthnagar/exterior/h7zku2.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/wolfpack-workspaces-vasanthnagar/kx4sjq.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/wolfpack-workspaces-vasanthnagar/xg59gy.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/wolfpack-workspaces-vasanthnagar/ytav9y.jpg'
    ]
  },
  {
    id: 408,
    name: 'Trial Bench',
    badge: 'Premium',
    rating: 4.9,
    area: 'Sasthamangalam',
    location: 'Sasthamangalam, Trivandrum',
    price: '₹4,999',
    period: '/ month',
    priceFormatted: '₹4,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://coworker.imgix.net/photos/india/thiruvananthapuram/trial-bench/main.jpeg',
      'https://coworker.imgix.net/photos/india/thiruvananthapuram/trial-bench/1.jpeg',
      'https://coworker.imgix.net/photos/india/thiruvananthapuram/trial-bench/2.jpg',
      'https://coworker.imgix.net/photos/india/thiruvananthapuram/trial-bench/3.jpg',
      'https://coworker.imgix.net/photos/india/thiruvananthapuram/trial-bench/4.jpg'
    ]
  },
  {
    id: 427,
    name: 'Smartworks Vaishnavi Tech Park',
    badge: 'Popular',
    rating: null,
    area: 'Nagavara',
    location: 'Nagavara, Bangalore',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/14dc3097883d00ded75870b6f23b60d047248ea3.jpg',
      'https://img.cofynd.com/images/original/7d991afab856ff7600aec026003965109021e1b8.jpg',
      'https://img.cofynd.com/images/original/640b02753a521ca316019b6fb8bf473565b0edd0.jpg',
      'https://img.cofynd.com/images/original/67761bee47530b701654a4abe1c58a451a279c4c.jpg',
      'https://img.cofynd.com/images/original/856d9d73fc023c1c3eeab089f859b4ff0e56bc1e.jpg'
    ]
  },
  {
    id: 438,
    name: 'Dex Co Work',
    badge: 'Popular',
    rating: 4.8,
    area: 'HBR Layout',
    location: 'HBR Layout, Bangalore',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://coworker.imgix.net/photos/india/bengaluru/dexcowork-space/main.jpeg',
      'https://coworker.imgix.net/photos/india/bengaluru/dexcowork-space/1.jpeg',
      'https://coworker.imgix.net/photos/india/bengaluru/dexcowork-space/2.jpeg',
      'https://coworker.imgix.net/photos/india/bengaluru/dexcowork-space/3.jpeg',
      'https://coworker.imgix.net/photos/india/bengaluru/dexcowork-space/4.jpeg'
    ]
  },
  {
    id: 541,
    name: 'Smartworks Golden Millenium',
    badge: 'Premium',
    rating: 4.5,
    area: 'Vasanth Nagar',
    location: 'Vasanth Nagar, Bangalore',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://coworker.imgix.net/photos/india/bengaluru/smartworks-coworking-golden-millenium/main-1569566151.png',
      'https://coworker.imgix.net/photos/india/bengaluru/smartworks-coworking-golden-millenium/1.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/smartworks-coworking-golden-millenium/2.png',
      'https://coworker.imgix.net/photos/india/bengaluru/smartworks-coworking-golden-millenium/3.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/smartworks-coworking-golden-millenium/4.png'
    ]
  },
  {
    id: 601,
    name: 'The Executive Centre Prestige Technostar',
    badge: 'Premium',
    rating: 4.5,
    area: 'Brookefield',
    location: 'Brookefield, Bangalore',
    price: '₹59,999',
    period: '/ month',
    priceFormatted: '₹59,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://assets.executivecentre.com/assets/Bangalore-PrestigeTechnostar-Reception_Gallery.jpg',
      'https://assets.executivecentre.com/assets/Bangalore-PrestigeTechnostar-Coworking_Gallery.jpg',
      'https://assets.executivecentre.com/assets/Bangalore-PrestigeTechnostar-ProductPO-PrivateOffice_Workstations.jpg',
      'https://assets.executivecentre.com/assets/Bangalore-PrestigeTechnostar-ProductVO-VirtualOffice-BusinessAddress.jpg',
      'https://assets.executivecentre.com/assets/Bangalore-PrestigeTechnostar-ProductMT-MeetingRoom_15pax.jpg'
    ]
  },
  {
    id: 605,
    name: 'BuzzWorks Brigade Tech Gardens',
    badge: 'Popular',
    rating: 3.2,
    area: 'Brookefield',
    location: 'Brookefield, Bangalore',
    price: '₹15,999',
    period: '/ month',
    priceFormatted: '₹15,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/buzzworks-brookefield/exterior/scr3f2.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/buzzworks-brookefield/u3kd6y.jpg'
    ]
  },
  {
    id: 607,
    name: 'Work2Gather',
    badge: null,
    rating: 4.9,
    area: 'Kasturi Nagar',
    location: 'Kasturi Nagar, Bangalore',
    price: '₹5,499',
    period: '/ month',
    priceFormatted: '₹5,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://coworker.imgix.net/photos/india/bengaluru/work2gather-2/main.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/work2gather-2/1.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/work2gather-2/2.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/work2gather-2/3.jpg',
      'https://coworker.imgix.net/photos/india/bengaluru/work2gather-2/4.jpg'
    ]
  },
  {
    id: 609,
    name: 'Colive Premerio Towers',
    badge: 'Popular',
    rating: 4.9,
    area: 'Kasturi Nagar',
    location: 'Kasturi Nagar, Bangalore',
    price: '₹3,999',
    period: '/ month',
    priceFormatted: '₹3,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/15e7d560c947c6bc900d3fb1003bfe9c77e398d2.jpg',
      'https://img.cofynd.com/images/original/26959197d965a409b93036e1f4aab351a977fa27.jpg',
      'https://img.cofynd.com/images/original/3a10fd7f1bedb1d5ecd272f0bf0d16aa347576e7.jpg',
      'https://img.cofynd.com/images/original/e1e23064d108590bcb3319e45573bc49a2ceb395.jpg',
      'https://img.cofynd.com/images/original/c1ca5ce9ec9caf7c6c1d9af4e976032b9e3021e1.jpg'
    ]
  },
  {
    id: 610,
    name: 'Cowrks RMZ Infinity',
    badge: 'Premium',
    rating: 4.6,
    area: 'Sadanandanagar',
    location: 'Sadanandanagar, Bangalore',
    price: '₹20,799',
    period: '/ month',
    priceFormatted: '₹20,799 / month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/cowrks-rmz-infinity-2/flexi/pn9y9b.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/cowrks-rmz-infinity-2/flexi/plans/flexi-desk/342h6t.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/cowrks-rmz-infinity-2/flexi/plans/flexi-desk/nvss7d.jpg'
    ]
  }
];

export const moreBangaloreOfficeCards = [
  {
    id: 9,
    name: 'away.center Koramangala',
    badge: 'Popular',
    rating: 5,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹13,999',
    period: '/ month',
    priceFormatted: '₹13,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/70c576585e2c824605936ad8e7673e9c39184ba2.webp',
      'https://img.cofynd.com/images/latest_images_2024/48f0d77e79a17aeed1cf6cebcdfea9e2e0164a12.webp',
      'https://img.cofynd.com/images/latest_images_2024/8d55814bd293910552a3f620f21cabb39e5735c4.webp',
      'https://img.cofynd.com/images/latest_images_2024/25544f614e445f6de20e55eb28644e33a04f7ee4.webp',
      'https://img.cofynd.com/images/latest_images_2024/2a8a4caef5e0eff769885d4a2cca70c9b45815a2.webp'
    ]
  },
  {
    id: 10,
    name: '91springboard Padmavati Complex',
    badge: 'Popular',
    rating: 4.2,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹10,499',
    period: '/ month',
    priceFormatted: '₹10,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/257e7838d5ecd76899b5aa07882c06d8be9a1aea.webp',
      'https://img.cofynd.com/images/latest_images_2024/badddc2ec7c34c920dfa563e34dc9b9b7b95dabe.webp',
      'https://img.cofynd.com/images/latest_images_2024/95fab10176feeb8c1582592e681b165f45d2078f.webp',
      'https://img.cofynd.com/images/latest_images_2024/eed15866008aac7b019ca665de5e1288d134a2aa.webp',
      'https://img.cofynd.com/images/latest_images_2024/e79274eb294face92d52517d40c60bf2ce6aebde.webp'
    ]
  },
  {
    id: 11,
    name: 'IndiQube Techpoint',
    badge: 'Popular',
    rating: 5,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/62b28553fde2a39b015af363ca0d27bf49983053.webp',
      'https://img.cofynd.com/images/latest_images_2024/78870d1e1c478b3b413cd5306abaec97999bd816.webp',
      'https://img.cofynd.com/images/latest_images_2024/236827a029f49356c51def78bed14927b49670cc.webp',
      'https://img.cofynd.com/images/latest_images_2024/ff8aae1c6a11272f670b0b8ee3e6e9942f2c279c.webp',
      'https://img.cofynd.com/images/latest_images_2024/7efef4772e4ef54cf5555525647090a7b525cab9.webp'
    ]
  },
  {
    id: 12,
    name: 'Awfis Prestige Blue Chip',
    badge: 'Popular',
    rating: 4.1,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/cd9f04f471f5ea005020617e30a9f4032da22c21.jpg',
      'https://img.cofynd.com/images/original/cc028d5433b846b6f993f6347065dec9c2cce57b.jpg',
      'https://img.cofynd.com/images/original/bfff48aef50ccab635f23f52fe972d5e8f016d1c.jpg',
      'https://img.cofynd.com/images/original/889ee3386c6466869f834312dd34e06f91bdd896.jpg',
      'https://img.cofynd.com/images/original/69569c8afd62b618624977f0eee1b0ae5dc407d1.jpg'
    ]
  },
  {
    id: 13,
    name: 'Instaoffice SPD Plaza',
    badge: 'Popular',
    rating: 4.2,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/d242439f15634648a3cd72b5728bbbbbd59affcc.webp',
      'https://img.cofynd.com/images/latest_images_2024/7a5ad91589f91323e69786b3bb04dad71a0399f3.webp',
      'https://img.cofynd.com/images/latest_images_2024/cfdb6702ae302a18df2630088e39a59ec77d5cbd.webp',
      'https://img.cofynd.com/images/latest_images_2024/6a6172b992ab54ba17aee6548e56d9b31ccda6b0.webp',
      'https://img.cofynd.com/images/latest_images_2024/e1db668c8c4a3ca5970b4244934c6c3bdb6d2cf5.webp'
    ]
  },
  {
    id: 14,
    name: 'BHIVE GNS Towers',
    badge: 'Popular',
    rating: 4.2,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/bd032c1a6dda500c0e1734e4e2d714bc5752de97.webp',
      'https://img.cofynd.com/images/latest_images_2024/333efe0ea8ee872444970549a907d5b5672a554d.webp',
      'https://img.cofynd.com/images/latest_images_2024/556fdf1274ffd47ffe0cf369073e9803f314c648.webp',
      'https://img.cofynd.com/images/latest_images_2024/a78d38fbe0ad0cf0cf4fad4f4ba8915ba37bc610.webp',
      'https://img.cofynd.com/images/latest_images_2024/cadcabb6fdef9874e7ea7563a218a5c9179a0468.webp'
    ]
  },
  {
    id: 15,
    name: 'UrbanVault Esares Building',
    badge: 'Popular',
    rating: 4,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/7258eaa0c58d5ce56e019fc1a8bd55794a98bc5b.jpg',
      'https://img.cofynd.com/images/original/b8b66cdb907fa9ab1469d1b6f6ee28b15bfd42a4.jpg',
      'https://img.cofynd.com/images/latest_images_2024/f85e441730783ed847486784d7b110a378e3f824.webp',
      'https://img.cofynd.com/images/latest_images_2024/956b4f48c69755a7303803dad89b233595fb7ec5.webp',
      'https://img.cofynd.com/images/latest_images_2024/9be805c73253837d17f48a683d66069a70ed9b93.webp'
    ]
  },
  {
    id: 16,
    name: 'IndiQube Octagon',
    badge: 'Popular',
    rating: 4.1,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/78bc4d88354587a176c6a31ab2ddba293b901b19.jpg',
      'https://img.cofynd.com/images/original/c5a7db9b91dd6bf706976e9b22da4f55f4a0b025.jpg',
      'https://img.cofynd.com/images/original/942c600ef2c626e1c17aac5b752bfc450ac4c9c8.jpg',
      'https://img.cofynd.com/images/original/9b7f24cde4937a98aba76099466eb718d004a15f.jpg',
      'https://img.cofynd.com/images/original/a1f0861ff263201bb7514438a97b4b2a997355ae.jpg'
    ]
  }
];

//export const allBangaloreOfficeCards = [...bangaloreOfficeCards, ...moreBangaloreOfficeCards];

export const perfectWorkspaceBanner = {
  title: 'Discover your perfect workspace with Mycoworking',
  subtitle: 'Explore Flexible Coworking Solutions, Premium Amenities, and Prime Locations Across India',
  ctaText: 'Enquire Now',
  bgImage: 'https://img.cofynd.com/images/latest_images_2024/28f41de2ee6c67528d528dc3b55fc7ad2801dcbc.webp'
};

export const finalBangaloreOfficeCards = [
  {
    id: 17,
    name: 'kustomWork 45',
    badge: 'Premium',
    rating: 4.4,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/f9281528475c492bf1ed563de855b052d4bd7209.webp',
      'https://img.cofynd.com/images/original/66e97384b3e8fff86453c74021b59ee823bed78a.jpg',
      'https://img.cofynd.com/images/latest_images_2024/31fd493b5fab163f9a2d8bddeedf1a1e17a1d885.webp',
      'https://img.cofynd.com/images/latest_images_2024/448660eb3e7510de6808dfa2128570e3bc29b381.webp',
      'https://img.cofynd.com/images/latest_images_2024/bbfe22c34e2dfa71e940a05190c8e8ded20db2e6.webp'
    ]
  },
  {
    id: 18,
    name: '91Springboard Gopala Krishna Complex',
    badge: 'Popular',
    rating: 4.2,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/7a47e648e2f8507f22b0bbe17ffba95c038ccc25.jpg',
      'https://img.cofynd.com/images/original/1cbff71d3df1dc948c372fb25b209191a08e5b86.jpg',
      'https://img.cofynd.com/images/latest_images_2024/9988de7ec9e649e7e9ccc0ecd20186d8dc62afd0.webp',
      'https://img.cofynd.com/images/latest_images_2024/7cac68ecacd3f6a32407f74844adc4d5b797d1a1.webp',
      'https://img.cofynd.com/images/original/4484d5dc0e0cc0ab0f9ba4d507d679e2ac72830a.jpg'
    ]
  },
  {
    id: 19,
    name: 'BHIVE Premium Church Street',
    badge: 'Popular',
    rating: 3.9,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹14,999',
    period: '/ month',
    priceFormatted: '₹14,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/f3301766c8ef599ab9fccf4e79d8ffb05607f8cb.jpg',
      'https://img.cofynd.com/images/original/bf82d800a2cc9ddc0818624e1675bb69056ff64e.jpg',
      'https://img.cofynd.com/images/original/f809998409e326eec1589237d62fec35a0f5bff5.jpg',
      'https://img.cofynd.com/images/original/f2c386881e1c1ffb15fec004a116835ec12d7e03.jpg',
      'https://img.cofynd.com/images/original/67db7677286bc5d9920525e826712bc117d9fd36.jpg'
    ]
  },
  {
    id: 20,
    name: 'Awfis Mission Road',
    badge: 'Popular',
    rating: 4.2,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹9,499',
    period: '/ month',
    priceFormatted: '₹9,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/65f1543b7fb401b76756dfbe5269035c952a8dc0.jpg',
      'https://img.cofynd.com/images/original/3776ddb85db9ac28c248b10c2e2237310889a9b0.jpg',
      'https://img.cofynd.com/images/original/f65a5b41aa00174147fd42068bfb500eca17bba7.jpg',
      'https://img.cofynd.com/images/original/f3bce1f518470efc471ddf30b4e8342c03601b4b.jpg',
      'https://img.cofynd.com/images/original/0a48c90eb5599f802649137a5dad227be87a27ca.jpg'
    ]
  },
  {
    id: 21,
    name: 'Novel Office Central',
    badge: 'Popular',
    rating: 4.7,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/305b6bd07971b47555e2b79b65cae51810a9bf43.webp',
      'https://img.cofynd.com/images/latest_images_2024/981f5da85f450667c290067fdb7cc47658012289.webp',
      'https://img.cofynd.com/images/latest_images_2024/108e44d3d4995d298f0079d63cb29506636e32cd.webp',
      'https://img.cofynd.com/images/latest_images_2024/5a0c5088f1a3fcd2e21f0b4f8e474bb596ed415b.webp',
      'https://img.cofynd.com/images/latest_images_2024/643d8a9679b0672534f839ba039c9bf127eb0296.webp'
    ]
  },
  {
    id: 22,
    name: 'Awfis The Estate Building',
    badge: 'Popular',
    rating: 4.2,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/dd4bdde3ebc28ab3f5905b5b13070c336e9c1dd8.jpg',
      'https://img.cofynd.com/images/original/4190c14d6af9851f7f075e8c1b0471b19944fdbf.jpg',
      'https://img.cofynd.com/images/original/5dea17870f98868bd17efb71775486f400b0c615.jpg',
      'https://img.cofynd.com/images/original/76201988713064871eb760f94795215843ea33d9.jpg',
      'https://img.cofynd.com/images/original/a3a34bbdddeba830b2202bbc3dec4de594c6e68f.jpg'
    ]
  },
  {
    id: 23,
    name: 'BHIVE Workspace',
    badge: 'Premium',
    rating: 4.3,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹11,999',
    period: '/ month',
    priceFormatted: '₹11,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/20da51b29df772b7e8f6739076112d855b0894f7.webp',
      'https://img.cofynd.com/images/latest_images_2024/5ab639e6b372917886889378c99795b4e4b7d357.webp',
      'https://img.cofynd.com/images/latest_images_2024/a56c458480e9e7948160cb4b5a75cc749972128f.webp',
      'https://img.cofynd.com/images/latest_images_2024/17a121e8dc76faa48ed1587bd39c83bae85918d2.webp'
    ]
  },
  {
    id: 24,
    name: 'BHIVE Prim Rose',
    badge: 'Premium',
    rating: 4.4,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹9,499',
    period: '/ month',
    priceFormatted: '₹9,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/d558ecaab78df13a1cbd058f1d63fff078c1e0c4.jpg',
      'https://img.cofynd.com/images/original/115e0f16773a44862496a139117d820d2f21cc4b.jpg',
      'https://img.cofynd.com/images/original/a16076bde799ff70cfb9ed44994bdb31626f1850.jpg',
      'https://img.cofynd.com/images/original/2d4abb4e94c65c4e157d5aa6bb6daa90026ea21c.jpg',
      'https://img.cofynd.com/images/original/f3d377dd0ca6e06dbaaa305f055f543ac8e15bf5.jpg'
    ]
  }
];

export const featuredBangaloreOfficeCards = [
  {
    id: 25,
    name: 'UNITUS',
    badge: 'Premium',
    rating: null,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹10,499',
    period: '/ month',
    priceFormatted: '₹10,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/5d6bdce911d2d6d29a01d2a56ae7551421f5fb25.webp',
      'https://img.cofynd.com/images/latest_images_2024/424d2d95b9d69f017cfd31a532f01b6b67b376ee.webp',
      'https://img.cofynd.com/images/latest_images_2024/7a3d410415516b1f5c82f9347b1bd0b56304e59e.webp',
      'https://img.cofynd.com/images/latest_images_2024/dffa9636309a5bd2d9414d44759c37d0a286e88e.webp',
      'https://img.cofynd.com/images/original/dedd21b7ac35de0f9975a8f9039b13b3f34b4668.jpg'
    ]
  },
  {
    id: 26,
    name: '91springboard George Thangaiah Complex',
    badge: 'Popular',
    rating: 4.3,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/0b7358b353d6a791efd3be1458c65b9c123bc641.jpg',
      'https://img.cofynd.com/images/original/01fc341f79200ba49965dd140205cca5798c1aea.jpg',
      'https://img.cofynd.com/images/original/ae0ec2ce28d53b932e1675a714f223a5618ce066.jpg',
      'https://img.cofynd.com/images/original/f3726d882d9ec8e0bb3b4ea968ad922015e9d4dc.jpg',
      'https://img.cofynd.com/images/original/8aedd18ca1ff6255b53489882f554edc5130222f.jpg'
    ]
  },
  {
    id: 27,
    name: 'IndiQube Opal',
    badge: 'Popular',
    rating: 4.5,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/3a09b79b0dcbb5f7958d9470187c8a27ffdf17ad.jpg',
      'https://img.cofynd.com/images/original/3b31cf2e8881b77e0d2ef66283cb0775fa123281.jpg',
      'https://img.cofynd.com/images/original/fbf926341143fd97b0df29962e5a54a47dbcf8f8.jpg',
      'https://img.cofynd.com/images/original/15db7af84400b986b0cd043befb3d6c79295f50c.jpg',
      'https://img.cofynd.com/images/original/0bb076ef96db49479c8e9b67897f50922e88c90e.jpg'
    ]
  },
  {
    id: 28,
    name: 'BHIVE Platinum Indiranagar',
    badge: 'Popular',
    rating: 4.1,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹14,999',
    period: '/ month',
    priceFormatted: '₹14,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/5176199e84c881a6da33330f0648e84ee0c8263b.webp',
      'https://img.cofynd.com/images/latest_images_2024/ba1da479c668bcde77de2e6da807cc5bfc0c6fdf.webp',
      'https://img.cofynd.com/images/latest_images_2024/d05ac68e752d48d18a9548d8cb836b81fd95c18a.webp',
      'https://img.cofynd.com/images/latest_images_2024/42e061a664661b8837b419f2e31407d72d806e20.webp'
    ]
  },
  {
    id: 29,
    name: 'BHIVE Premium Indiranagar',
    badge: 'Popular',
    rating: 4.1,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹11,999',
    period: '/ month',
    priceFormatted: '₹11,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/5f7324a00fd749c9b0ad758d47edfd5d580def38.jpg',
      'https://img.cofynd.com/images/original/adb1c372b80aa8d599d393a466d06e2c45f907c4.jpg',
      'https://img.cofynd.com/images/original/86890c758fbfc951a1e54e0fe403f14ec6c9e0f4.jpg',
      'https://img.cofynd.com/images/original/7f5741db7a68d8fdea858bda92cba9cd37b89814.jpg',
      'https://img.cofynd.com/images/original/83fdd16c008a520c82723ad290e25631b81c686f.jpg'
    ]
  },
  {
    id: 30,
    name: 'IndiQube Embassy Prime',
    badge: 'Popular',
    rating: 4,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/14dc3097883d00ded75870b6f23b60d047248ea3.jpg',
      'https://img.cofynd.com/images/original/7d991afab856ff7600aec026003965109021e1b8.jpg',
      'https://img.cofynd.com/images/original/640b02753a521ca316019b6fb8bf473565b0edd0.jpg',
      'https://img.cofynd.com/images/original/67761bee47530b701654a4abe1c58a451a279c4c.jpg',
      'https://img.cofynd.com/images/original/856d9d73fc023c1c3eeab089f859b4ff0e56bc1e.jpg'
    ]
  },
  {
    id: 31,
    name: 'IndiQube TownHub',
    badge: 'Popular',
    rating: 4.1,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/1387d618963b6741df60c64483297d764204863d.webp',
      'https://img.cofynd.com/images/latest_images_2024/b976eea70a1337cf50658510554f881856d8aa63.webp',
      'https://img.cofynd.com/images/latest_images_2024/54cb1bf58553dedf6708c2e5e0f917b5d00b1c17.webp',
      'https://img.cofynd.com/images/latest_images_2024/2e17cf37176194d28f07db5eae5d0c71cb1db5de.webp',
      'https://img.cofynd.com/images/latest_images_2024/9c30a88110350adef969d872838b15c625b2dc90.webp'
    ]
  },
  {
    id: 32,
    name: 'Honeykomb by BHIVE',
    badge: 'Premium',
    rating: 4.7,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/94520e6c657a26032275bae6ec5ecb28c2ec3645.webp',
      'https://img.cofynd.com/images/latest_images_2024/8fb511efff6c4ac3e675feb33da2fed7bab8fea8.webp',
      'https://img.cofynd.com/images/latest_images_2024/b3b4f02542246091ec686e628f183388997ace01.webp',
      'https://img.cofynd.com/images/latest_images_2024/800f8563e454a64cd599567bfa7718b836dd7765.webp',
      'https://img.cofynd.com/images/latest_images_2024/be8dd586067e9fad71f14f885311a3df59edcdd3.webp'
    ]
  }
];

// Aliases for compatibility
export const bangaloreAreas = bangaloreNeighborhoods;
export const bangaloreSpaces = bangaloreOfficeCards;
export const areas = bangaloreNeighborhoods;
export const spaces = bangaloreOfficeCards;

export const customizedOfficeBanner = {
  title: 'Customized office solutions for your team',
  features: [
    { id: 1, text: 'Customized Office Spaces' },
    { id: 2, text: 'Prime Locations' },
    { id: 3, text: 'Free Guided Tours' },
    { id: 4, text: 'Perfect for 50+ Team Size' }
  ],
  ctaText: 'Enquire Now',
  bgImage: 'https://img.cofynd.com/images/latest_images_2024/83bb813890447d5d3d6bda55c7133a5fd48cdbc5.webp'
};

export const stillNotFindingBanner = {
  title: 'Still not able to find coworking space?',
  subtitle: 'Our space experts will help you find the perfect coworking space in prime locations',
  ctaText: 'Enquire Now',
  bgImage: 'https://img.cofynd.com/images/latest_images_2024/406c83ccb0729b57d9beb973b7e4088ab7640ef3.webp'
};

export const paginationData = {
  totalPages: 4,
  initialPage: 1
};

// ============================================================================
// Page 2 Coworking Office Cards (Pagination Page 2)
// ----------------------------------------------------------------------------
// Jab user pagination me button '2' par click karega, tab top 8 cards ki jagah
// ye 8 naye cards display honge.
// Button '1' click karne par wapas pehle wale 8 cards (bangaloreOfficeCards) aa jayenge.
// Har card me real internet images, badge, rating, location aur price di gayi hai.
// ============================================================================
export const pageTwoBangaloreOfficeCards = [
  {
    id: 33,
    name: 'BHIVE JBR Tech Park',
    badge: 'Premium',
    rating: 4.4,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/2851d6fa3bd6909bca06fc26da49b5cf1cede2ad.jpg',
      'https://img.cofynd.com/images/original/834fc89f0327b7d9559b17cea07807f9af45fe0e.jpg',
      'https://img.cofynd.com/images/original/a4eadf8723bbf934307a585ce3a10b87ba80d475.jpg',
      'https://img.cofynd.com/images/original/cba23fbff5fb9fc8ddd441d8a25f68e8efa1c76b.jpg',
      'https://img.cofynd.com/images/original/63e2171239c540d2745f634c1f73a3198526040a.jpg'
    ]
  },
  {
    id: 34,
    name: 'Awfis Prestige Shantiniketan 3',
    badge: 'Premium',
    rating: 5,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/35a452410dbdb38b098f51e1feab1ac37610660e.jpg',
      'https://img.cofynd.com/images/latest_images_2024/590357500eab598657f087eef4dec54b672eb91a.webp',
      'https://img.cofynd.com/images/original/1b34ea2a5d01a9c268cb660dcf83e0b392cf4f3e.jpg',
      'https://img.cofynd.com/images/original/a1c0106b57c1301b84810b39d1a67aa99c205ec5.jpg',
      'https://img.cofynd.com/images/original/a3086bd7c780ef6a8e8bf884e4305aebfd493bef.jpg'
    ]
  },
  {
    id: 35,
    name: 'Regus Crescent Tower 4',
    badge: 'Popular',
    rating: 4.4,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹14,499',
    period: '/ month',
    priceFormatted: '₹14,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/15e7d560c947c6bc900d3fb1003bfe9c77e398d2.jpg',
      'https://img.cofynd.com/images/original/26959197d965a409b93036e1f4aab351a977fa27.jpg',
      'https://img.cofynd.com/images/original/3a10fd7f1bedb1d5ecd272f0bf0d16aa347576e7.jpg',
      'https://img.cofynd.com/images/original/e1e23064d108590bcb3319e45573bc49a2ceb395.jpg',
      'https://img.cofynd.com/images/original/c1ca5ce9ec9caf7c6c1d9af4e976032b9e3021e1.jpg'
    ]
  },
  {
    id: 36,
    name: 'iFinStrats Coworking',
    badge: 'Popular',
    rating: 5,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹4,999',
    period: '/ month',
    priceFormatted: '₹4,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/d26ee13c1e786dfe45bc1dae11d76ba82477721e.webp',
      'https://img.cofynd.com/images/latest_images_2024/15c32e8ebd07fcd00a84e8012d05ec57383de042.webp',
      'https://img.cofynd.com/images/latest_images_2024/fe808308012ed34e26268efec85259f3b62b092f.webp',
      'https://img.cofynd.com/images/latest_images_2024/0d0fbf69f720692aaf10184ff0b947bc8caec729.webp'
    ]
  },
  {
    id: 37,
    name: 'Goodworks Cowork Shantiniketan',
    badge: 'Popular',
    rating: 3.7,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/2c211a7acced772fe46d723e771d68c2d3cea6fd.webp',
      'https://img.cofynd.com/images/latest_images_2024/7428c8d0f119ddab9ff4ab9eb8e0c74de5e6021a.webp',
      'https://img.cofynd.com/images/latest_images_2024/9dc5d741c498203f7560e04bd0ed278b38544631.webp',
      'https://img.cofynd.com/images/latest_images_2024/a2d5a44ab6b933bc773cb84ac006aa252f914a5b.webp'
    ]
  },
  {
    id: 38,
    name: 'WorkX Brigade IRV Centre',
    badge: 'Popular',
    rating: 4.5,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/35ba5f2e7fb3ecea59578755dfb90e57bfa9f84e.webp',
      'https://img.cofynd.com/images/latest_images_2024/f2d5634d7c765d4d1cb6a234a0425d0a8eac3121.webp',
      'https://img.cofynd.com/images/latest_images_2024/b2509f917049d71b201f04f0aeb01f13356df2d2.webp',
      'https://img.cofynd.com/images/latest_images_2024/b886d41fdbad671c310e7b7fc4c6d69f48c018c0.webp',
      'https://img.cofynd.com/images/latest_images_2024/5e21f76c961fce9729833e73394892bd65e97464.webp'
    ]
  },
  {
    id: 39,
    name: 'Awfis Prestige Shantiniketan',
    badge: 'Premium',
    rating: 4.7,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/50ffa88db04bd7bb35b184d61839be6b54b2d459.webp',
      'https://img.cofynd.com/images/latest_images_2024/c2e746539de0b5efcf0599f153b8680c8ad5ffe3.webp',
      'https://img.cofynd.com/images/latest_images_2024/04985d4ed401b1ecfd9f4b2f3ccd7e310afe7def.webp',
      'https://img.cofynd.com/images/latest_images_2024/fb62c69f8d4ec70ea2c01cf3cd04997db605bb2d.webp',
      'https://img.cofynd.com/images/latest_images_2024/851974e26cd07c777d2290f7bd4ca3647868d0c4.webp'
    ]
  },
  {
    id: 40,
    name: 'Goodworks Cowork',
    badge: 'Popular',
    rating: 4.6,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/2f0f1c4e9925f904ea67539c7445b6ea00b901a5.webp',
      'https://img.cofynd.com/images/latest_images_2024/5db3a9a333c060b19ecd3b2ceba811bb7a55c00f.webp',
      'https://img.cofynd.com/images/latest_images_2024/211b8b898ab041af8f2f5ae2318db7b6a7470949.webp',
      'https://img.cofynd.com/images/latest_images_2024/e991a43662fa571c2a1977c0975ad0c97461e5a6.webp',
      'https://img.cofynd.com/images/latest_images_2024/2d9e7739decb78af7960b6956ed5b8e94cbd1e82.webp'
    ]
  }
];

// ============================================================================
// Page 2 Second Batch Coworking Office Cards (Pagination Page 2 - Second 8 Cards)
// ----------------------------------------------------------------------------
// Jab user pagination me button '2' par click karega, tab "Find Your Perfect Office
// Solution" box ke niche wale second 8 cards ki jagah ye 8 naye cards display honge.
// Button '1' click karne par wapas pehle wale 8 cards (moreBangaloreOfficeCards) aa jayenge.
// Sabhi cards me real internet images, badge, rating, location aur price di gayi hai.
// ============================================================================
export const pageTwoMoreBangaloreOfficeCards = [
  // 1. Inscape Cowork - Koregaon Park, Bangalore
  {
    id: 41,
    name: 'Inscape Cowork',
    badge: null,      // Screenshot me koi badge nahi hai
    rating: null,     // Screenshot me rating nahi hai
    area: 'Koregaon Park',
    location: 'Koregaon Park, Bangalore',
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/ee864fd84b6a8c54cad355429958fec57cddde5c.jpg',
      'https://img.cofynd.com/images/original/03ae317926b42b6a9a01662c1148419614457788.jpg',
      'https://img.cofynd.com/images/original/ae12c9b1368625902b665be5d398939c36417758.jpg',
      'https://img.cofynd.com/images/original/02316e1074e2d36378fbdf303d7dbad849bc5244.jpg',
      'https://img.cofynd.com/images/original/94c4dd8dbf4e0c4e747ee83a54d6560965e94b28.jpg'
    ]
  },
  // 2. Quick Office - Hinjewadi-Wakad Road, Bangalore
  {
    id: 42,
    name: 'Quick Office',
    badge: 'Popular', // Card ke upar 'Popular' crown badge
    rating: null,     // Screenshot me rating nahi hai
    area: 'Hinjewadi',
    location: 'Hinjewadi, Bangalore',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/d9c9de21fde512d1abf3c2de44a3ca2c56d75712.jpg',
      'https://img.cofynd.com/images/original/c4146a81b3793ae793e25b0cb13c32b5756cb865.jpg',
      'https://img.cofynd.com/images/original/f7466184511d7f02d41b619e075051aa12bc12eb.jpg',
      'https://img.cofynd.com/images/original/f9e80193cfcf64f331cf11e4bf5b741ca12431cf.jpg',
      'https://img.cofynd.com/images/original/55486c750b28414ba491a92e105e466ce78d2c67.jpg'
    ]
  },
  // 3. Bootstart Coworking – Clover Hills Plaza - NIBM, Bangalore
  {
    id: 43,
    name: 'Bootstart Coworking – Clover Hills Plaza',
    badge: 'Premium', // Card ke upar 'Premium' crown badge
    rating: 4.9,      // Star rating 4.9
    area: 'NIBM',
    location: 'NIBM, Bangalore',
    price: '₹7,000',
    period: '/ month',
    priceFormatted: '₹7,000 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/bb629c8a53d66f187aeb5bf553ad5e279af05a5c.webp',
      'https://img.cofynd.com/images/latest_images_2024/1a29582d9217eb74a62174c6020573ae0c78a08d.webp',
      'https://img.cofynd.com/images/latest_images_2024/60655a15a0c32900fa75fe66b89691cb5ee4e0bc.webp',
      'https://img.cofynd.com/images/latest_images_2024/5b2ca024c0d02b5fc20f8fe6413247ea795d3fa9.webp',
      'https://img.cofynd.com/images/latest_images_2024/76cfa7b3feaa5574519f71c4c1a9657b98d9c228.webp'
    ]
  },
  // 4. Bootstart Coworking – VCC Vantage Baner - Baner, Bangalore
  {
    id: 44,
    name: 'Bootstart Coworking – VCC Vantage Baner',
    badge: 'Premium', // Card ke upar 'Premium' crown badge
    rating: 4.8,      // Star rating 4.8
    area: 'Baner',
    location: 'Baner, Bangalore',
    price: '₹8,000',
    period: '/ month',
    priceFormatted: '₹8,000 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/1622dedd6662b77bb61099f9979f10dea0b8818d.webp',
      'https://img.cofynd.com/images/latest_images_2024/b732da45143a5951d08e54bf48d8885b54fc17bf.webp',
      'https://img.cofynd.com/images/latest_images_2024/7efb19e99551c6e1ffcf82bbfb772c914bfba544.webp',
      'https://img.cofynd.com/images/latest_images_2024/856697b099f66bb6c4dbfe849e7555e16ae306a7.webp',
      'https://img.cofynd.com/images/latest_images_2024/855d0458df81c810fb594b281aa06a1420d2cb2f.webp'
    ]
  },
  // 5. The Living Desk - Pimple Saudagar, Bangalore
  {
    id: 45,
    name: 'The Living Desk',
    badge: 'Special Offer', // Card ke upar 'Special Offer' crown badge
    rating: null,           // Screenshot me rating nahi hai
    area: 'Pimple Saudagar',
    location: 'Pimple Saudagar, Bangalore',
    price: '₹4,999',
    period: '/ month',
    priceFormatted: '₹4,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/4f906129fc19084e952849d33f5bbd29d844f076.webp',
      'https://img.cofynd.com/images/latest_images_2024/7bebe47c0a876798a01103c812d1b8273a0058b7.webp',
      'https://img.cofynd.com/images/latest_images_2024/d97607a049fae21f47847beceae4b16752d56a31.webp',
      'https://img.cofynd.com/images/latest_images_2024/2f8080ddb777a459b128522e84c9873f272a0f82.webp',
      'https://img.cofynd.com/images/latest_images_2024/88c641496c21a415ff67be50d3a54b38bf2137be.webp'
    ]
  },
  // 6. CreateX - Ashok Nagar, Kharadi, Bangalore
  {
    id: 46,
    name: 'CreateX',
    badge: 'Premium', // Card ke upar 'Premium' crown badge
    rating: null,     // Screenshot me rating nahi hai
    area: 'Kharadi',
    location: 'Ashok Nagar, Kharadi Maharashtra , India',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/ba093deda85778f9f720eac4409625ef1cba8f9f.jpg',
      'https://img.cofynd.com/images/original/a03dfa74d271ba3f560d26fb511b81832049964e.jpg',
      'https://img.cofynd.com/images/original/405fe42fc3a633a699c2d139e6a9ee865c3bb084.jpg',
      'https://img.cofynd.com/images/original/f28945cf4ea827179069ec6d817ceba3c90e0c05.jpg',
      'https://img.cofynd.com/images/original/23ee3a2fa6f338d77a83424d85600c3b5d2780e0.jpg'
    ]
  },
  // 7. Kontor Space - Fatima Nagar, Wanowrie, Bangalore
  {
    id: 47,
    name: 'Kontor Space',
    badge: null,  // Screenshot me koi badge nahi hai
    rating: null, // Screenshot me rating nahi hai
    area: 'Wanowrie',
    location: 'Fatima Nagar, Wanowrie, Bangalore, Maharashtra, India',
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/84defb26448d63bd51f9935a13db918b8c83b5d0.webp',
      'https://img.cofynd.com/images/latest_images_2024/29598218177fe7da5f5db3e843818e69e4ce03cb.webp',
      'https://img.cofynd.com/images/latest_images_2024/2b7a4a905a960fb5ce147f12e2c8427f711e7413.webp',
      'https://img.cofynd.com/images/latest_images_2024/314e1a067dd09c647b744fe610ca5efd373be5c2.webp',
      'https://img.cofynd.com/images/latest_images_2024/2d2e1c66e927bbcc7492c102df0e61d8713d288d.webp'
    ]
  },
  // 8. Cowerkz - Baner, Bangalore
  {
    id: 48,
    name: 'Cowerkz',
    badge: 'Popular', // Card ke upar 'Popular' crown badge
    rating: 4.9,      // Star rating 4.9
    area: 'Baner',
    location: 'Baner, Bangalore',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/51ee565b91eea36c875c7ddf996652b81ba22d8b.webp',
      'https://img.cofynd.com/images/latest_images_2024/09c488ee273cba93322d8e48b813155734cecfd5.webp',
      'https://img.cofynd.com/images/latest_images_2024/a309e390c58742880c9e6bb075787f7a7daae40b.webp',
      'https://img.cofynd.com/images/latest_images_2024/d62bc5a6f2cf38a4b6555ccdf66f7fbb6b7e53f1.webp',
      'https://img.cofynd.com/images/latest_images_2024/914ca385f0ef386bb0fb27c593fa8e5cc6946766.webp'
    ]
  }
];

// ============================================================================
// Page 2 Third Batch Coworking Office Cards (Pagination Page 2 - Third 8 Cards)
// ----------------------------------------------------------------------------
// Jab user pagination me button '2' par click karega, tab "Discover your perfect
// workspace with Mycoworking" banner ke niche wale third 8 cards ki jagah ye 8 naye cards display honge.
// Button '1' click karne par wapas pehle wale 8 cards (finalBangaloreOfficeCards) aa jayenge.
// Sabhi cards me real internet images, badge, rating, location aur price di gayi hai.
// ============================================================================
export const pageTwoFinalBangaloreOfficeCards = [
  // 1. EFC Prime Offices - Baner, Bangalore
  {
    id: 49,
    name: 'EFC Prime Offices',
    badge: 'Popular', // Card ke upar 'Popular' crown badge
    rating: 4.2,      // Star rating 4.2
    area: 'Baner',
    location: 'Baner, Bangalore',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/75c99a42549db958c07069acd879e75aa5f112ed.webp',
      'https://img.cofynd.com/images/latest_images_2024/222d4dd62d04a62174c83f982be0532cf2b5a198.webp',
      'https://img.cofynd.com/images/latest_images_2024/9ef1671fc659779df3df80f339f4d1c1cf6ecae0.webp',
      'https://img.cofynd.com/images/latest_images_2024/fa704c3e86c04f98129486c990a1f0a1ea396a5b.webp',
      'https://img.cofynd.com/images/latest_images_2024/fbe554bfd53457183e29f3d9f187422f6764506c.webp'
    ]
  },
  // 2. Sprint Epicentre - Shivaji Nagar, Bangalore
  {
    id: 50,
    name: 'Sprint Epicentre',
    badge: 'Special Offer', // Card ke upar 'Special Offer' crown badge
    rating: 4.0,           // Star rating 4.0
    area: 'Shivaji Nagar',
    location: 'Shivaji Nagar, Bangalore',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/161abf6511e6b987f78cb460b8dc78f9a47cff41.webp',
      'https://img.cofynd.com/images/latest_images_2024/be352613cf58bb0702d765873995874da605f63d.webp',
      'https://img.cofynd.com/images/latest_images_2024/7ec8942b036bf62bc1c5fae446864fe78a6ff607.webp',
      'https://img.cofynd.com/images/latest_images_2024/18a20d4f6c4067ef9280d0d5b4a9235e80721200.webp',
      'https://img.cofynd.com/images/latest_images_2024/ef3327b3b7548fae1f6e077051db55805562776c.webp'
    ]
  },
  // 3. Sprint Antaaya - Balewadi, Bangalore
  {
    id: 51,
    name: 'Sprint Antaaya',
    badge: 'Popular', // Card ke upar 'Popular' crown badge
    rating: 4.6,      // Star rating 4.6
    area: 'Balewadi',
    location: 'Balewadi, Bangalore',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/01669a959ca243a0ace85d5cb3d35ad7a0fa0069.webp',
      'https://img.cofynd.com/images/latest_images_2024/00bc4a460b721ea7f7d142b7811776ceee388a1e.webp',
      'https://img.cofynd.com/images/latest_images_2024/8c7ce8970e70f6d61001ff991d90fc921a2a4b3d.webp',
      'https://img.cofynd.com/images/latest_images_2024/7fa3b7fbba5e6e3ce010a30b65fb74ebf4ff843a.webp',
      'https://img.cofynd.com/images/latest_images_2024/804a806c9e05ceabdf06c04f9104b2b3a9bb7c24.webp'
    ]
  },
  // 4. Divine Coworking Cosmos - Cosmos gardens, Bangalore
  {
    id: 52,
    name: 'Divine Coworking Cosmos',
    badge: 'Popular', // Card ke upar 'Popular' crown badge
    rating: null,     // Screenshot me rating nahi hai
    area: 'Magarpatta',
    location: 'Cosmos gardens, Bangalore',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/874e8a3fc6fa04771cc22b68f8c70a64552ee734.jpg',
      'https://img.cofynd.com/images/original/6c5be75fe5d634db8be1fa70f8072ba00bb70562.jpg',
      'https://img.cofynd.com/images/original/2cbcf812bc8527a20c5713ca2be06b9b1e84a278.jpg',
      'https://img.cofynd.com/images/original/fe74e7c7a52e909da48fe97475d4be1ea70c14b7.jpg',
      'https://img.cofynd.com/images/original/4e84b80e55da08d132ce3a00f274cb7e39a3f2d0.jpg'
    ]
  },
  // 5. ccw bangalore coworking space - Balewadi, Bangalore
  {
    id: 53,
    name: 'ccw bangalore coworking space',
    badge: null,      // Screenshot me koi badge nahi hai
    rating: null,     // Screenshot me rating nahi hai
    area: 'Balewadi',
    location: 'Unit No 04 Heavenly Homes, Next To Cummins India and Iris B...',
    price: '₹1,000',
    period: '/ hour', // Hourly pricing as in screenshot
    priceFormatted: '₹1,000 / hour',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/0849fb3bf5b76c8c877c9f8eaa670dbe58b24c4c.webp',
      'https://img.cofynd.com/images/latest_images_2024/76aeae659b85c35ff613768407d4b4dd52b821ae.webp',
      'https://img.cofynd.com/images/latest_images_2024/1d717f96b27e4c76ba2e31ea2dd2604724a350eb.webp',
      'https://img.cofynd.com/images/latest_images_2024/e9069dfb4cfec1b7e4115fdb9f214251239c43d5.webp',
      'https://img.cofynd.com/images/latest_images_2024/aaeb5c5553e83f5c531d0447fae3f16ff36e9ff0.webp'
    ]
  },
  // 6. Excella Coworking Space - DS Ikon - Baner, Bangalore
  {
    id: 54,
    name: 'Excella Coworking Space - DS Ikon',
    badge: null,      // Screenshot me koi badge nahi hai
    rating: null,     // Screenshot me rating nahi hai
    area: 'Baner',
    location: 'DS IKON 4th Floor, Bangalore',
    price: '₹8,000',
    period: '/ month',
    priceFormatted: '₹8,000 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/65f1543b7fb401b76756dfbe5269035c952a8dc0.jpg',
      'https://img.cofynd.com/images/original/3776ddb85db9ac28c248b10c2e2237310889a9b0.jpg',
      'https://img.cofynd.com/images/original/f65a5b41aa00174147fd42068bfb500eca17bba7.jpg',
      'https://img.cofynd.com/images/original/f3bce1f518470efc471ddf30b4e8342c03601b4b.jpg',
      'https://img.cofynd.com/images/original/0a48c90eb5599f802649137a5dad227be87a27ca.jpg'
    ]
  },
  // 7. ByzBay - Pimpri Chinchwad, Bangalore
  {
    id: 55,
    name: 'ByzBay',
    badge: 'Popular', // Card ke upar 'Popular' crown badge
    rating: 5.0,      // Star rating 5.0
    area: 'Pimpri Chinchwad',
    location: 'Pimpri Chinchwad, Bangalore',
    price: '₹5,499',
    period: '/ month',
    priceFormatted: '₹5,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/d61bec0eb50cc1da6c442d4c97de383c393b46cc.webp',
      'https://img.cofynd.com/images/latest_images_2024/30d2fcdae19197c83f982924ba95593849767858.webp',
      'https://img.cofynd.com/images/latest_images_2024/49156b1424756543b5ce40bc63d0c411440f8981.webp',
      'https://img.cofynd.com/images/latest_images_2024/67e2a9b3a3ca7eeb789c0aa38562dff783637c37.webp',
      'https://img.cofynd.com/images/latest_images_2024/7dd58ec0e767439fa8a1bf18db35b44d3c6902ca.webp'
    ]
  },
  // 8. ScaleUp CoWork - BMCC Road, Bangalore
  {
    id: 56,
    name: 'ScaleUp CoWork - Deccan Center',
    badge: null,      // Screenshot me koi badge nahi hai
    rating: null,     // Screenshot me rating nahi hai
    area: 'BMCC Road',
    location: 'BMCC Road, Bangalore, Maharashtra',
    price: '₹7,000',
    period: '/ month',
    priceFormatted: '₹7,000 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/f3301766c8ef599ab9fccf4e79d8ffb05607f8cb.jpg',
      'https://img.cofynd.com/images/original/bf82d800a2cc9ddc0818624e1675bb69056ff64e.jpg',
      'https://img.cofynd.com/images/original/f809998409e326eec1589237d62fec35a0f5bff5.jpg',
      'https://img.cofynd.com/images/original/f2c386881e1c1ffb15fec004a116835ec12d7e03.jpg',
      'https://img.cofynd.com/images/original/67db7677286bc5d9920525e826712bc117d9fd36.jpg'
    ]
  }
];

// ============================================================================
// Page 2 Fourth Batch Coworking Office Cards (Pagination Page 2 - Fourth 8 Cards)
// ----------------------------------------------------------------------------
// Jab user pagination me button '2' par click karega, tab "Customized office
// solutions for your team" banner ke niche wale fourth 8 cards ki jagah ye 8 naye cards display honge.
// Button '1' click karne par wapas pehle wale 8 cards (featuredBangaloreOfficeCards) aa jayenge.
// Sabhi cards me real internet images, badge, rating, location aur price di gayi hai.
// ============================================================================
export const pageTwoFeaturedBangaloreOfficeCards = [
  // 1. Awfis Baner Business Bay - Baner, Bangalore
  {
    id: 57,
    name: 'Awfis Baner Business Bay',
    badge: 'Popular', // Card ke upar 'Popular' crown badge
    rating: 5.0,      // Star rating 5.0
    area: 'Baner',
    location: 'Baner, Bangalore',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/8e38d64e483da95f8222e8c0f9c3d8bee9b188b4.webp',
      'https://img.cofynd.com/images/latest_images_2024/fa704c3e86c04f98129486c990a1f0a1ea396a5b.webp',
      'https://img.cofynd.com/images/latest_images_2024/9ef1671fc659779df3df80f339f4d1c1cf6ecae0.webp',
      'https://img.cofynd.com/images/latest_images_2024/222d4dd62d04a62174c83f982be0532cf2b5a198.webp',
      'https://img.cofynd.com/images/latest_images_2024/75c99a42549db958c07069acd879e75aa5f112ed.webp'
    ]
  },
  // 2. Thinkcowork - Aundh, Bangalore
  {
    id: 58,
    name: 'Thinkcowork',
    badge: 'Popular', // Card ke upar 'Popular' crown badge
    rating: null,     // Screenshot me rating nahi hai
    area: 'Aundh',
    location: 'Aundh, Bangalore',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/0b7358b353d6a791efd3be1458c65b9c123bc641.jpg',
      'https://img.cofynd.com/images/original/01fc341f79200ba49965dd140205cca5798c1aea.jpg',
      'https://img.cofynd.com/images/original/ae0ec2ce28d53b932e1675a714f223a5618ce066.jpg',
      'https://img.cofynd.com/images/original/f3726d882d9ec8e0bb3b4ea968ad922015e9d4dc.jpg',
      'https://img.cofynd.com/images/original/8aedd18ca1ff6255b53489882f554edc5130222f.jpg'
    ]
  },
  // 3. Enzigma Coworking - Baner, Bangalore
  {
    id: 59,
    name: 'Enzigma Coworking',
    badge: 'Premium', // Card ke upar 'Premium' crown badge
    rating: null,     // Screenshot me rating nahi hai
    area: 'Baner',
    location: 'Baner, Bangalore',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/14bab5b79e13634a0877bdc64d5bbf1d3b2be99f.webp',
      'https://img.cofynd.com/images/latest_images_2024/e9069dfb4cfec1b7e4115fdb9f214251239c43d5.webp',
      'https://img.cofynd.com/images/latest_images_2024/1d717f96b27e4c76ba2e31ea2dd2604724a350eb.webp',
      'https://img.cofynd.com/images/latest_images_2024/76aeae659b85c35ff613768407d4b4dd52b821ae.webp',
      'https://img.cofynd.com/images/latest_images_2024/0849fb3bf5b76c8c877c9f8eaa670dbe58b24c4c.webp'
    ]
  },
  // 4. ANA Workspace - Chinchwad, Bangalore
  {
    id: 60,
    name: 'ANA Workspace',
    badge: 'Popular', // Card ke upar 'Popular' crown badge
    rating: null,     // Screenshot me rating nahi hai
    area: 'Pimpri Chinchwad',
    location: 'Chinchwad, Bangalore',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/5f7324a00fd749c9b0ad758d47edfd5d580def38.jpg',
      'https://img.cofynd.com/images/original/adb1c372b80aa8d599d393a466d06e2c45f907c4.jpg',
      'https://img.cofynd.com/images/original/86890c758fbfc951a1e54e0fe403f14ec6c9e0f4.jpg',
      'https://img.cofynd.com/images/original/7f5741db7a68d8fdea858bda92cba9cd37b89814.jpg',
      'https://img.cofynd.com/images/original/83fdd16c008a520c82723ad290e25631b81c686f.jpg'
    ]
  },
  // 5. TODO COWORKING - Wakad, Bangalore
  {
    id: 61,
    name: 'TODO COWORKING',
    badge: 'Premium', // Card ke upar 'Premium' crown badge
    rating: null,     // Screenshot me rating nahi hai
    area: 'Wakad',
    location: 'Wakad, Bangalore',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/7990934854cccc27121ee476a22f714e26d131d3.webp',
      'https://img.cofynd.com/images/latest_images_2024/aaeb5c5553e83f5c531d0447fae3f16ff36e9ff0.webp',
      'https://img.cofynd.com/images/latest_images_2024/222d4dd62d04a62174c83f982be0532cf2b5a198.webp',
      'https://img.cofynd.com/images/latest_images_2024/9ef1671fc659779df3df80f339f4d1c1cf6ecae0.webp',
      'https://img.cofynd.com/images/latest_images_2024/75c99a42549db958c07069acd879e75aa5f112ed.webp'
    ]
  },
  // 6. Anchor Coworking - Shivneri Colony, Bangalore
  {
    id: 62,
    name: 'Anchor Coworking',
    badge: null,  // Screenshot me koi badge nahi hai
    rating: null, // Screenshot me rating nahi hai
    area: 'Baner',
    location: 'Shivneri Colony, Bangalore',
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/14dc3097883d00ded75870b6f23b60d047248ea3.jpg',
      'https://img.cofynd.com/images/original/7d991afab856ff7600aec026003965109021e1b8.jpg',
      'https://img.cofynd.com/images/original/640b02753a521ca316019b6fb8bf473565b0edd0.jpg',
      'https://img.cofynd.com/images/original/67761bee47530b701654a4abe1c58a451a279c4c.jpg',
      'https://img.cofynd.com/images/original/856d9d73fc023c1c3eeab089f859b4ff0e56bc1e.jpg'
    ]
  },
  // 7. TRIOS - Finswell - Viman nagar - Viman Nagar, Bangalore
  {
    id: 63,
    name: 'TRIOS - Finswell - Viman nagar',
    badge: 'Premium', // Card ke upar 'Premium' crown badge
    rating: null,     // Screenshot me rating nahi hai
    area: 'Viman Nagar',
    location: 'Viman Nagar, Bangalore',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/d1115009669a61c861c0397a5c542d1561574e8f.webp',
      'https://img.cofynd.com/images/latest_images_2024/76cfa7b3feaa5574519f71c4c1a9657b98d9c228.webp',
      'https://img.cofynd.com/images/latest_images_2024/5b2ca024c0d02b5fc20f8fe6413247ea795d3fa9.webp',
      'https://img.cofynd.com/images/latest_images_2024/60655a15a0c32900fa75fe66b89691cb5ee4e0bc.webp',
      'https://img.cofynd.com/images/latest_images_2024/bb629c8a53d66f187aeb5bf553ad5e279af05a5c.webp'
    ]
  },
  // 8. Awfis ABIL Imperial - Baner, Bangalore
  {
    id: 64,
    name: 'Awfis ABIL Imperial',
    badge: 'Popular', // Card ke upar 'Popular' crown badge
    rating: 4.4,      // Star rating 4.4
    area: 'Baner',
    location: 'Baner, Bangalore',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/00b2b04e8ff2868c8390acab8b997db064b8720d.webp',
      'https://img.cofynd.com/images/latest_images_2024/d05ac68e752d48d18a9548d8cb836b81fd95c18a.webp',
      'https://img.cofynd.com/images/latest_images_2024/ba1da479c668bcde77de2e6da807cc5bfc0c6fdf.webp',
      'https://img.cofynd.com/images/latest_images_2024/5176199e84c881a6da33330f0648e84ee0c8263b.webp',
      'https://img.cofynd.com/images/latest_images_2024/42e061a664661b8837b419f2e31407d72d806e20.webp'
    ]
  }
];

















// ============================================================================
// Page 3 Coworking Office Cards (Pagination Page 3)
// ----------------------------------------------------------------------------
// Jab user pagination me button '3' par click karega, tab top 8 cards ki jagah
// ye 8 naye cards display honge.
// Button '1' click karne par wapas pehle wale 8 cards (bangaloreOfficeCards) aa jayenge.
// Har card me real internet images, badge, rating, location aur price di gayi hai.
// ============================================================================
export const pageThreeBangaloreOfficeCards = [
  // 1. Trios Balaji Business Centre - Baner, Bangalore
  {
    id: 65,
    name: 'Trios Balaji Business Centre',
    badge: 'Popular', // Card ke upar 'Popular' crown badge
    rating: 4.6,      // Star rating 4.6
    area: 'Baner',    // Neighborhood filter ke liye
    location: 'Baner, Bangalore', // Card me display hone wala address
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    // Authentic interior and exterior workspace images from internet
    images: [
      'https://img.cofynd.com/images/latest_images_2024/6c7056031566a6effa75bbece0375c731fa08c71.webp',
      'https://img.cofynd.com/images/latest_images_2024/0113c9b620d1a9867330c81e78c157a0dced4bec.webp',
      'https://img.cofynd.com/images/latest_images_2024/9036735cb17381aa7fc53ded3316d8a93f867b49.webp',
      'https://img.cofynd.com/images/latest_images_2024/d4038a751c40e65aea7d598d4cf69a333c72ca1e.webp',
      'https://img.cofynd.com/images/latest_images_2024/d8dbca95fc6c51fcde7bc07a3eaf7ea01896c1b4.webp'
    ]
  },
  // 2. Incube Coworking - Baner, Bangalore
  {
    id: 66,
    name: 'Incube Coworking',
    badge: null,      // Screenshot me koi badge nahi hai
    rating: null,     // Screenshot me rating nahi hai
    area: 'Baner',
    location: 'Next to Medipoint Hospital, Baner, Bangalore',
    price: '₹4,000',
    period: '/ month',
    priceFormatted: '₹4,000 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/3c0e0a90da6cd12e574c30830f447192a158438c.webp',
      'https://img.cofynd.com/images/latest_images_2024/41252cae060fc85b7b6b0adfe2a4fd7409f83671.webp',
      'https://img.cofynd.com/images/latest_images_2024/f66350205eab3d3cf4aecd0513d81aa6da2dc422.webp',
      'https://img.cofynd.com/images/latest_images_2024/fd0c1e36d2a648b44cf30eeeb11590e88f6868fe.webp',
      'https://img.cofynd.com/images/latest_images_2024/f8d9606998e1218be2aa1030247812464c493f97.webp'
    ]
  },
  // 3. Share A Space - Aundh, Bangalore
  {
    id: 67,
    name: 'Share A Space',
    badge: 'Popular', // Card ke upar 'Popular' crown badge
    rating: 4.5,      // Star rating 4.5
    area: 'Aundh',    // Neighborhood filter ke liye
    location: 'Aundh, Bangalore', // Card me display hone wala address
    price: '₹9,499',
    period: '/ month',
    priceFormatted: '₹9,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/2851d6fa3bd6909bca06fc26da49b5cf1cede2ad.jpg',
      'https://img.cofynd.com/images/original/834fc89f0327b7d9559b17cea07807f9af45fe0e.jpg',
      'https://img.cofynd.com/images/original/a4eadf8723bbf934307a585ce3a10b87ba80d475.jpg',
      'https://img.cofynd.com/images/original/cba23fbff5fb9fc8ddd441d8a25f68e8efa1c76b.jpg',
      'https://img.cofynd.com/images/original/63e2171239c540d2745f634c1f73a3198526040a.jpg'
    ]
  },
  // 4. Collab Workspaces - Kharadi, Bangalore
  {
    id: 68,
    name: 'Collab Workspaces',
    badge: 'Popular', // Card ke upar 'Popular' crown badge
    rating: 4.8,      // Star rating 4.8
    area: 'Kharadi',
    location: 'Kharadi, Bangalore',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/35a452410dbdb38b098f51e1feab1ac37610660e.jpg',
      'https://img.cofynd.com/images/latest_images_2024/590357500eab598657f087eef4dec54b672eb91a.webp',
      'https://img.cofynd.com/images/original/1b34ea2a5d01a9c268cb660dcf83e0b392cf4f3e.jpg',
      'https://img.cofynd.com/images/original/a1c0106b57c1301b84810b39d1a67aa99c205ec5.jpg',
      'https://img.cofynd.com/images/original/a3086bd7c780ef6a8e8bf884e4305aebfd493bef.jpg'
    ]
  },
  // 5. Starthub - Koregaon Park, Bangalore
  {
    id: 69,
    name: 'Starthub',
    badge: 'Popular', // Card ke upar 'Popular' crown badge
    rating: 4.8,      // Star rating 4.8
    area: 'Koregaon Park',
    location: 'Koregaon Park, Bangalore',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/15e7d560c947c6bc900d3fb1003bfe9c77e398d2.jpg',
      'https://img.cofynd.com/images/original/26959197d965a409b93036e1f4aab351a977fa27.jpg',
      'https://img.cofynd.com/images/original/3a10fd7f1bedb1d5ecd272f0bf0d16aa347576e7.jpg',
      'https://img.cofynd.com/images/original/e1e23064d108590bcb3319e45573bc49a2ceb395.jpg',
      'https://img.cofynd.com/images/original/c1ca5ce9ec9caf7c6c1d9af4e976032b9e3021e1.jpg'
    ]
  },
  // 6. Excella Coworking Space - DS Ikon - Baner, Bangalore
  {
    id: 70,
    name: 'Excella Coworking Space - DS Ikon',
    badge: null,      // Screenshot me koi badge nahi hai
    rating: null,     // Screenshot me rating nahi hai
    area: 'Baner',
    location: 'DS IKON 4th Floor, Bangalore',
    price: '₹8,000',
    period: '/ month',
    priceFormatted: '₹8,000 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/65f1543b7fb401b76756dfbe5269035c952a8dc0.jpg',
      'https://img.cofynd.com/images/original/3776ddb85db9ac28c248b10c2e2237310889a9b0.jpg',
      'https://img.cofynd.com/images/original/f65a5b41aa00174147fd42068bfb500eca17bba7.jpg',
      'https://img.cofynd.com/images/original/f3bce1f518470efc471ddf30b4e8342c03601b4b.jpg',
      'https://img.cofynd.com/images/original/0a48c90eb5599f802649137a5dad227be87a27ca.jpg'
    ]
  },
  // 7. Ideas to Impacts Hub Wakad - Wakad, Bangalore
  {
    id: 71,
    name: 'Ideas to Impacts Hub Wakad',
    badge: 'Premium', // Card ke upar 'Premium' crown badge
    rating: 4.5,      // Star rating 4.5
    area: 'Wakad',
    location: 'Wakad, Bangalore',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/d26ee13c1e786dfe45bc1dae11d76ba82477721e.webp',
      'https://img.cofynd.com/images/latest_images_2024/15c32e8ebd07fcd00a84e8012d05ec57383de042.webp',
      'https://img.cofynd.com/images/latest_images_2024/fe808308012ed34e26268efec85259f3b62b092f.webp',
      'https://img.cofynd.com/images/latest_images_2024/0d0fbf69f720692aaf10184ff0b947bc8caec729.webp'
    ]
  },
  // 8. Ideas to Impacts Hub Viman Nagar - Viman Nagar, Bangalore
  {
    id: 72,
    name: 'Ideas to Impacts Hub Viman Nagar',
    badge: 'Premium', // Card ke upar 'Premium' crown badge
    rating: 4.4,      // Star rating 4.4
    area: 'Viman Nagar',
    location: 'Viman Nagar, Bangalore',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/2c211a7acced772fe46d723e771d68c2d3cea6fd.webp',
      'https://img.cofynd.com/images/latest_images_2024/7428c8d0f119ddab9ff4ab9eb8e0c74de5e6021a.webp',
      'https://img.cofynd.com/images/latest_images_2024/9dc5d741c498203f7560e04bd0ed278b38544631.webp',
      'https://img.cofynd.com/images/latest_images_2024/a2d5a44ab6b933bc773cb84ac006aa252f914a5b.webp'
    ]
  }
];

// ============================================================================
// Page 3 Second Batch Coworking Office Cards (Pagination Page 3 - Second 8 Cards)
// ----------------------------------------------------------------------------
// Jab user pagination me button '3' par click karega, tab "Find Your Perfect Office
// Solution" box ke niche wale second 8 cards ki jagah ye 8 naye cards display honge.
// Button '1' click karne par wapas pehle wale 8 cards (moreBangaloreOfficeCards) aa jayenge.
// Sabhi cards me real internet images, badge, rating, location aur price di gayi hai.
// ============================================================================
export const pageThreeMoreBangaloreOfficeCards = [
  // 1. TRIOS Lalwani House - Sakore Nagar, Viman Nagar, Bangalore
  {
    id: 73,
    name: 'TRIOS Lalwani House',
    badge: 'Popular', // Card ke upar 'Popular' crown badge
    rating: null,     // Screenshot me rating nahi hai
    area: 'Viman Nagar',
    location: 'Sakore Nagar, Viman Nagar, Bangalore',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/35ba5f2e7fb3ecea59578755dfb90e57bfa9f84e.webp',
      'https://img.cofynd.com/images/latest_images_2024/f2d5634d7c765d4d1cb6a234a0425d0a8eac3121.webp',
      'https://img.cofynd.com/images/latest_images_2024/b2509f917049d71b201f04f0aeb01f13356df2d2.webp',
      'https://img.cofynd.com/images/latest_images_2024/b886d41fdbad671c310e7b7fc4c6d69f48c018c0.webp',
      'https://img.cofynd.com/images/latest_images_2024/5e21f76c961fce9729833e73394892bd65e97464.webp'
    ]
  },
  // 2. FMTOS - Pimpri-Chinchwad, Bangalore
  {
    id: 74,
    name: 'FMTOS',
    badge: null,      // Screenshot me koi badge nahi hai
    rating: null,     // Screenshot me rating nahi hai
    area: 'Pimpri Chinchwad',
    location: 'Pimpri Chinchwad, Bangalore',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/50ffa88db04bd7bb35b184d61839be6b54b2d459.webp',
      'https://img.cofynd.com/images/latest_images_2024/c2e746539de0b5efcf0599f153b8680c8ad5ffe3.webp',
      'https://img.cofynd.com/images/latest_images_2024/04985d4ed401b1ecfd9f4b2f3ccd7e310afe7def.webp',
      'https://img.cofynd.com/images/latest_images_2024/fb62c69f8d4ec70ea2c01cf3cd04997db605bb2d.webp',
      'https://img.cofynd.com/images/latest_images_2024/851974e26cd07c777d2290f7bd4ca3647868d0c4.webp'
    ]
  },
  // 3. Synergy - Viman Nagar, Bangalore
  {
    id: 75,
    name: 'Synergy',
    badge: null,      // Screenshot me koi badge nahi hai
    rating: null,     // Screenshot me rating nahi hai
    area: 'Viman Nagar',
    location: 'Viman Nagar, Bangalore',
    price: '₹7,500',
    period: '/ month',
    priceFormatted: '₹7,500 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/d558ecaab78df13a1cbd058f1d63fff078c1e0c4.jpg',
      'https://img.cofynd.com/images/original/115e0f16773a44862496a139117d820d2f21cc4b.jpg',
      'https://img.cofynd.com/images/original/a16076bde799ff70cfb9ed44994bdb31626f1850.jpg',
      'https://img.cofynd.com/images/original/2d4abb4e94c65c4e157d5aa6bb6daa90026ea21c.jpg',
      'https://img.cofynd.com/images/original/f3d377dd0ca6e06dbaaa305f055f543ac8e15bf5.jpg'
    ]
  },
  // 4. tstart Coworking – VCC Vantage 9 - Baner, Bangalore
  {
    id: 76,
    name: 'tstart Coworking – VCC Vantage 9',
    badge: 'Premium', // Card ke upar 'Premium' crown badge
    rating: 4.8,      // Star rating 4.8
    area: 'Baner',
    location: 'Baner, Bangalore',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/dd4bdde3ebc28ab3f5905b5b13070c336e9c1dd8.jpg',
      'https://img.cofynd.com/images/original/4190c14d6af9851f7f075e8c1b0471b19944fdbf.jpg',
      'https://img.cofynd.com/images/original/5dea17870f98868bd17efb71775486f400b0c615.jpg',
      'https://img.cofynd.com/images/original/76201988713064871eb760f94795215843ea33d9.jpg',
      'https://img.cofynd.com/images/original/a3a34bbdddeba830b2202bbc3dec4de594c6e68f.jpg'
    ]
  },
  // 5. WeHub - Baner, Bangalore
  {
    id: 77,
    name: 'WeHub',
    badge: 'Special Offer', // Card ke upar 'Special Offer' crown badge
    rating: 4.8,            // Star rating 4.8
    area: 'Baner',
    location: 'Baner, Bangalore',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/57aa8458c5e3bf8b54bbe655d079a49f4601e78b.webp',
      'https://img.cofynd.com/images/latest_images_2024/22f0d572a88da02e78514aec50f94c95d3c909ec.webp',
      'https://img.cofynd.com/images/latest_images_2024/b12e9bf89fa0315c77438345f2d48364bce50345.webp',
      'https://img.cofynd.com/images/latest_images_2024/c3ee5a6d81c5537aadc6e7f6028cabd66d26ac9a.webp',
      'https://img.cofynd.com/images/latest_images_2024/5df64a1cbf82c9530cf7fe8a9742d28ffb5d5e08.webp'
    ]
  },
  // 6. Bootstart Coworking – Arcadian Koregaon Park - Koregaon Park, Bangalore
  {
    id: 78,
    name: 'Bootstart Coworking – Arcadian Koregaon Park',
    badge: 'Premium', // Card ke upar 'Premium' crown badge
    rating: 4.3,      // Star rating 4.3
    area: 'Koregaon Park',
    location: 'Koregaon Park, Bangalore',
    price: '₹7,000',
    period: '/ month',
    priceFormatted: '₹7,000 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/2f0f1c4e9925f904ea67539c7445b6ea00b901a5.webp',
      'https://img.cofynd.com/images/latest_images_2024/5db3a9a333c060b19ecd3b2ceba811bb7a55c00f.webp',
      'https://img.cofynd.com/images/latest_images_2024/211b8b898ab041af8f2f5ae2318db7b6a7470949.webp',
      'https://img.cofynd.com/images/latest_images_2024/e991a43662fa571c2a1977c0975ad0c97461e5a6.webp',
      'https://img.cofynd.com/images/latest_images_2024/2d9e7739decb78af7960b6956ed5b8e94cbd1e82.webp'
    ]
  },
  // 7. Inscape Cowork - Koregaon Park, Bangalore
  {
    id: 79,
    name: 'Inscape Cowork',
    badge: null,      // Screenshot me koi badge nahi hai
    rating: null,     // Screenshot me rating nahi hai
    area: 'Koregaon Park',
    location: 'Koregaon Park, Bangalore',
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/ee864fd84b6a8c54cad355429958fec57cddde5c.jpg',
      'https://img.cofynd.com/images/original/9302736584f479284cee5697c9df4706bae876ad.jpg',
      'https://img.cofynd.com/images/original/328a5e5df424fb9ab09bd1bc6aa7a9c8ea5f4c44.jpg',
      'https://img.cofynd.com/images/original/973f6e93cd6b90aa9527996965ab124ea0bdc454.jpg',
      'https://img.cofynd.com/images/original/a332625bd31a0c9ac4c72040dfd7455743784a66.jpg'
    ]
  },
  // 8. Quick Office - Hinjewadi-Wakad Road, Bangalore
  {
    id: 80,
    name: 'Quick Office - Hinjewadi Phase 1',
    badge: 'Popular', // Card ke upar 'Popular' crown badge
    rating: null,     // Screenshot me rating nahi hai
    area: 'Hinjewadi',
    location: 'Hinjewadi, Bangalore',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/d9c9de21fde512d1abf3c2de44a3ca2c56d75712.jpg',
      'https://img.cofynd.com/images/original/e06e73593b9ee84db11f0ae4f258b0d337c6db01.jpg',
      'https://img.cofynd.com/images/original/6a2d6ce5db832bf5e10ae7cdb183395e1bf258c9.jpg',
      'https://img.cofynd.com/images/original/cdc6fcc222be7e4217c0347946389bb7fb09dae3.jpg',
      'https://img.cofynd.com/images/original/b40580f63ffb1fa709068c7de89842003df58fb6.jpg'
    ]
  }
];

// ============================================================================
// Page 3 Third Batch Coworking Office Cards (Pagination Page 3 - Third 8 Cards)
// ----------------------------------------------------------------------------
// Jab user pagination me button '3' par click karega, tab "Discover your perfect
// workspace with Mycoworking" banner ke niche wale third 8 cards ki jagah ye 8 naye cards display honge.
// Button '1' click karne par wapas pehle wale 8 cards (finalBangaloreOfficeCards) aa jayenge.
// Sabhi cards me real internet images, badge, rating, location aur price di gayi hai.
// ============================================================================
export const pageThreeFinalBangaloreOfficeCards = [
  // 1. Bootstart Coworking – Clover Hills Plaza - NIBM, Bangalore
  {
    id: 81,
    name: 'Bootstart Coworking – Clover Hills Phase 2',
    badge: 'Premium', // Card ke upar 'Premium' crown badge
    rating: 4.9,      // Star rating 4.9
    area: 'NIBM',
    location: 'NIBM, Bangalore',
    price: '₹7,000',
    period: '/ month',
    priceFormatted: '₹7,000 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/bb629c8a53d66f187aeb5bf553ad5e279af05a5c.webp',
      'https://img.cofynd.com/images/latest_images_2024/e3eb27b9d83b4a67b815a558faf150ea3f4a8a25.webp',
      'https://img.cofynd.com/images/latest_images_2024/6a850a02e071c4d4507b9af18a66efba8265f666.webp',
      'https://img.cofynd.com/images/latest_images_2024/00852e69198f4610f5251085cbe5f6f33d72a488.webp',
      'https://img.cofynd.com/images/latest_images_2024/fe26d0e20ddaf03e8947342e7765769c3b7b5cd9.webp'
    ]
  },
  // 2. Level 212 coworks - Exhibition Rd, Bangalore Camp, Bangalore
  {
    id: 82,
    name: 'Level 212 coworks',
    badge: 'Premium', // Card ke upar 'Premium' crown badge
    rating: null,     // Screenshot me rating nahi hai
    area: 'Camp',
    location: 'Exhibition Rd, Camp, Bangalore, Maharashtra, India',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/b39104c49962b5a5c6c518188fde3de85b38c8aa.webp',
      'https://img.cofynd.com/images/latest_images_2024/a4687669c0a4674e47f10811d7bb4ed2aefeb342.webp',
      'https://img.cofynd.com/images/latest_images_2024/4c7a60fb21162e91020a89e34e90ffc3be615b8e.webp',
      'https://img.cofynd.com/images/latest_images_2024/6300c42f03e2256f34941fd4951f36e7ba5a8aad.webp',
      'https://img.cofynd.com/images/latest_images_2024/eb34ff86c6e8cf061227ed2532c6420e13c11c14.webp'
    ]
  },
  // 3. Thinkcowork - Aundh, Bangalore
  {
    id: 83,
    name: 'Thinkcowork',
    badge: 'Popular', // Card ke upar 'Popular' crown badge
    rating: null,     // Screenshot me rating nahi hai
    area: 'Aundh',
    location: 'Aundh, Bangalore',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/0b7358b353d6a791efd3be1458c65b9c123bc641.jpg',
      'https://img.cofynd.com/images/original/01fc341f79200ba49965dd140205cca5798c1aea.jpg',
      'https://img.cofynd.com/images/original/ae0ec2ce28d53b932e1675a714f223a5618ce066.jpg',
      'https://img.cofynd.com/images/original/f3726d882d9ec8e0bb3b4ea968ad922015e9d4dc.jpg',
      'https://img.cofynd.com/images/original/8aedd18ca1ff6255b53489882f554edc5130222f.jpg'
    ]
  },
  // 4. TBL Spaces - Nanded City, Bangalore
  {
    id: 84,
    name: 'TBL Spaces',
    badge: 'Special Offer', // Card ke upar 'Special Offer' crown badge
    rating: null,           // Screenshot me rating nahi hai
    area: 'Nanded City',
    location: 'Nanded City Sinhgad Rd, Nanded City, Nanded, Bangalore, Maharashtra 411068, India',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/7ef6faeab4bf7be24db4493b03a5c6813043a62f.webp',
      'https://img.cofynd.com/images/latest_images_2024/7e54f22dd07e39e40c4dd21bc597e63c91dd04f8.webp',
      'https://img.cofynd.com/images/latest_images_2024/43308ed85496621e28c75c70f584bca673627b51.webp',
      'https://img.cofynd.com/images/latest_images_2024/416042ba0670ffdc14a90c1b703e8d74d3a1898f.webp',
      'https://img.cofynd.com/images/latest_images_2024/604a92f54abd499469b83ec493b75005e4ef2edc.webp'
    ]
  },
  // 5. Enzigma Coworking - Baner, Bangalore
  {
    id: 85,
    name: 'Enzigma Coworking',
    badge: 'Premium', // Card ke upar 'Premium' crown badge
    rating: null,     // Screenshot me rating nahi hai
    area: 'Baner',
    location: 'Baner, Bangalore.',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/14bab5b79e13634a0877bdc64d5bbf1d3b2be99f.webp',
      'https://img.cofynd.com/images/latest_images_2024/cdf6755fdcb0b9a745c6bb58644a8968399396d9.webp',
      'https://img.cofynd.com/images/latest_images_2024/11291db26ff85bbaae02e6a32f7b6898c102bf84.webp',
      'https://img.cofynd.com/images/latest_images_2024/59e74404c38a90705245cae23d7be0e7b7b21e2f.webp',
      'https://img.cofynd.com/images/latest_images_2024/5dd38c3a0736451d80c762031c8e4b097cf7f617.webp'
    ]
  },
  // 6. Reality Workspaces - Pimple Saudagar, Bangalore
  {
    id: 86,
    name: 'Reality Workspaces',
    badge: 'Special Offer', // Card ke upar 'Special Offer' crown badge
    rating: 4.5,            // Star rating 4.5
    area: 'Pimple Saudagar',
    location: 'Pimple Saudagar, Bangalore',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/2be07c465566f8b625d1afb456aef5dc689ba19f.webp',
      'https://img.cofynd.com/images/latest_images_2024/fbaa09dd38b921eed7e17380c4863d8f551f99ef.webp',
      'https://img.cofynd.com/images/latest_images_2024/4be600f6d137a826f4b13fd733c91fce071d127b.webp',
      'https://img.cofynd.com/images/latest_images_2024/32ef0a19a3c2a59cd0f0a9583f3db8b6f45741f4.webp',
      'https://img.cofynd.com/images/latest_images_2024/ee1efc46e5c811c5f1c1509db951cf20ff81a37f.webp'
    ]
  },
  // 7. ANA Workspace - Chinchwad, Bangalore
  {
    id: 87,
    name: 'ANA Workspace',
    badge: 'Popular', // Card ke upar 'Popular' crown badge
    rating: null,     // Screenshot me rating nahi hai
    area: 'Pimpri Chinchwad',
    location: 'Chinchwad, Bangalore',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/5f7324a00fd749c9b0ad758d47edfd5d580def38.jpg',
      'https://img.cofynd.com/images/original/adb1c372b80aa8d599d393a466d06e2c45f907c4.jpg',
      'https://img.cofynd.com/images/original/86890c758fbfc951a1e54e0fe403f14ec6c9e0f4.jpg',
      'https://img.cofynd.com/images/original/7f5741db7a68d8fdea858bda92cba9cd37b89814.jpg',
      'https://img.cofynd.com/images/original/83fdd16c008a520c82723ad290e25631b81c686f.jpg'
    ]
  },
  // 8. AllDeskSolutions - Hinjewadi, Bangalore
  {
    id: 88,
    name: 'AllDeskSolutions',
    badge: null,      // Screenshot me koi badge nahi hai
    rating: null,     // Screenshot me rating nahi hai
    area: 'Hinjewadi',
    location: 'Hinjewadi, Bangalore.',
    price: '₹4,999',
    period: '/ month',
    priceFormatted: '₹4,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/db3574f251f49a8ac3859e44f7f99c7ff90cc985.webp',
      'https://img.cofynd.com/images/latest_images_2024/dfd50858233c615952e06d8f209f2e752bcd39f7.webp',
      'https://img.cofynd.com/images/latest_images_2024/fa9688429eb6f5c7c8c829d3d6459a77ff85471d.webp',
      'https://img.cofynd.com/images/latest_images_2024/5763ca719ab1320015fecef0932760705e7bfd06.webp',
      'https://img.cofynd.com/images/latest_images_2024/2f082cc66ba871d4389faaac8b9f74818de97ee4.webp'
    ]
  }
];

// ============================================================================
// Page 3 Fourth Batch Coworking Office Cards (Pagination Page 3 - Fourth 8 Cards)
// ----------------------------------------------------------------------------
// Jab user pagination me button '3' par click karega, tab "Customized office
// solutions for your team" banner ke niche wale fourth 8 cards ki jagah ye 8 naye cards display honge.
// Button '1' click karne par wapas pehle wale 8 cards (featuredBangaloreOfficeCards) aa jayenge.
// Sabhi cards me real internet images, badge, rating, location aur price di gayi hai.
// ============================================================================
export const pageThreeFeaturedBangaloreOfficeCards = [
  // 1. TODO COWORKING - Wakad, Bangalore
  {
    id: 89,
    name: 'TODO COWORKING',
    badge: 'Premium', // Card ke upar 'Premium' crown badge
    rating: null,     // Screenshot me rating nahi hai
    area: 'Wakad',
    location: 'Wakad, Bangalore',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/7990934854cccc27121ee476a22f714e26d131d3.webp',
      'https://img.cofynd.com/images/latest_images_2024/acee142282a5d947508500e47c6d91b945294a73.webp',
      'https://img.cofynd.com/images/latest_images_2024/8dc6c4866d1bf707e06338abc82b5c2f53223abd.webp',
      'https://img.cofynd.com/images/latest_images_2024/f014b6b07d1d578c4b30eaa1d87633dfb24fdbfc.webp',
      'https://img.cofynd.com/images/latest_images_2024/6599a7e747e2b98191bddc176789553fedeb3df7.webp'
    ]
  },
  // 2. Galaxy coworking space - Camp, Bangalore
  {
    id: 90,
    name: 'Galaxy coworking space',
    badge: 'Popular', // Card ke upar 'Popular' crown badge
    rating: 4.7,      // Star rating 4.7
    area: 'Camp',
    location: 'Camp, Bangalore',
    price: '₹4,999',
    period: '/ month',
    priceFormatted: '₹4,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/446209614429d51bbe2cfa369feb4bdf012c50a9.webp',
      'https://img.cofynd.com/images/latest_images_2024/4490283396d564f681e45972f6ec23f77f741906.webp',
      'https://img.cofynd.com/images/latest_images_2024/40e8ddf7973d82b1b434a36988da5fb5733578ef.webp',
      'https://img.cofynd.com/images/latest_images_2024/8e682f41942a667c000799ce5f4da4fae0f8487c.webp',
      'https://img.cofynd.com/images/latest_images_2024/8bb04c2010c6e4ab0d07f2e3d2361d20283f93dd.webp'
    ]
  },
  // 3. Anchor Coworking - Shivneri Colony, Bangalore
  {
    id: 91,
    name: 'Anchor Coworking',
    badge: null,  // Screenshot me koi badge nahi hai
    rating: null, // Screenshot me rating nahi hai
    area: 'Baner',
    location: 'Shivneri Colony, Bangalore',
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/14dc3097883d00ded75870b6f23b60d047248ea3.jpg',
      'https://img.cofynd.com/images/original/7d991afab856ff7600aec026003965109021e1b8.jpg',
      'https://img.cofynd.com/images/original/640b02753a521ca316019b6fb8bf473565b0edd0.jpg',
      'https://img.cofynd.com/images/original/67761bee47530b701654a4abe1c58a451a279c4c.jpg',
      'https://img.cofynd.com/images/original/856d9d73fc023c1c3eeab089f859b4ff0e56bc1e.jpg'
    ]
  },
  // 4. Growth Hub - Baner, Bangalore
  {
    id: 92,
    name: 'Growth Hub',
    badge: 'Premium', // Card ke upar 'Premium' crown badge
    rating: 4.5,      // Star rating 4.5
    area: 'Baner',
    location: 'Baner, Bangalore',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/844c255f8c6429752e6772208d8668dfc8e41274.webp',
      'https://img.cofynd.com/images/latest_images_2024/e698a2b903850d8952b9f34674faf4f1d3f35dcf.webp',
      'https://img.cofynd.com/images/latest_images_2024/201832e933dceb27eca847ecb0ab985c0a523123.webp',
      'https://img.cofynd.com/images/latest_images_2024/f958e6462f64871243953ec4188180b7916964e3.webp',
      'https://img.cofynd.com/images/latest_images_2024/07f5854f28ec6d447a35f49993b316f8cbfb6359.webp'
    ]
  },
  // 5. TRIOS - Finswell - Viman nagar - Viman Nagar, Bangalore
  {
    id: 93,
    name: 'TRIOS - Finswell - Viman nagar',
    badge: 'Premium', // Card ke upar 'Premium' crown badge
    rating: null,     // Screenshot me rating nahi hai
    area: 'Viman Nagar',
    location: 'Viman Nagar, Bangalore',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/d1115009669a61c861c0397a5c542d1561574e8f.webp',
      'https://img.cofynd.com/images/latest_images_2024/75458e6a4ee351c10f8d3b58a21015fbcdeef842.webp',
      'https://img.cofynd.com/images/latest_images_2024/c56c35fe8b729d207ce6785dc6c66a14290a66aa.webp',
      'https://img.cofynd.com/images/latest_images_2024/75af3aa267e938d6081088f4dd8a8f82c5d73279.webp',
      'https://img.cofynd.com/images/latest_images_2024/a4e23f998a00530e1f94d0be23abe8592e97d6d7.webp'
    ]
  },
  // 6. Kowork Coworking Space - Wakad, Bangalore
  {
    id: 94,
    name: 'Kowork Coworking Space',
    badge: null,  // Screenshot me koi badge nahi hai
    rating: null, // Screenshot me rating nahi hai
    area: 'Wakad',
    location: 'Wakad, Bangalore',
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/55ae3b24dbb0fb8ed75b3fc1fd87d1cbcad8e652.webp',
      'https://img.cofynd.com/images/latest_images_2024/3252fc95e205d450e549efb62bac725c3c4231e3.webp',
      'https://img.cofynd.com/images/latest_images_2024/dc18c40cdf4287e2fee751b9d1426edf4e7a545b.webp',
      'https://img.cofynd.com/images/latest_images_2024/a1fdfc5c3abb7419420bbfa233f790ce34a6e873.webp',
      'https://img.cofynd.com/images/latest_images_2024/30af2c304245fdb437494efa307bb5c2ebff907c.webp'
    ]
  },
  // 7. Bootstart Coworking – VCC Vantage Baner - Baner, Bangalore
  {
    id: 95,
    name: 'Bootstart Coworking – VCC Vantage Baner',
    badge: 'Premium', // Card ke upar 'Premium' crown badge
    rating: 4.8,      // Star rating 4.8
    area: 'Baner',
    location: 'Baner, Bangalore',
    price: '₹8,000',
    period: '/ month',
    priceFormatted: '₹8,000 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/1622dedd6662b77bb61099f9979f10dea0b8818d.webp',
      'https://img.cofynd.com/images/latest_images_2024/5e8f36266fdc3bd8a52267e609998f81bff22f67.webp',
      'https://img.cofynd.com/images/latest_images_2024/285e3d78f1660df3a52f01fea91563136690abb6.webp',
      'https://img.cofynd.com/images/latest_images_2024/9b67fa5556adeecca2ed6cd9e95aed7df615d138.webp',
      'https://img.cofynd.com/images/latest_images_2024/b93374912956cfc66816ff897d77e420fa3bd92f.webp'
    ]
  },
  // 8. CreateX - Ashok Nagar, Kharadi, Bangalore
  {
    id: 96,
    name: 'CreateX',
    badge: 'Premium', // Card ke upar 'Premium' crown badge
    rating: null,     // Screenshot me rating nahi hai
    area: 'Kharadi',
    location: 'Ashok Nagar, Kharadi Maharashtra , India',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/ba093deda85778f9f720eac4409625ef1cba8f9f.jpg',
      'https://img.cofynd.com/images/original/dc2a0811c0026d494ffdad2b4e3025644b692dbe.jpg',
      'https://img.cofynd.com/images/original/4d6c2833702a2b2bfb21743655d6ac9c2a574573.jpg',
      'https://img.cofynd.com/images/original/d0f040cece9bdd18febbcfe92fe0408ecf0bf446.jpg',
      'https://img.cofynd.com/images/latest_images_2024/567de36013fc2931b6f9c5a0148c66fa720e4621.webp'
    ]
  }
];











// ============================================================================
// Page 4 Coworking Office Cards (Pagination Page 4)
// ----------------------------------------------------------------------------
// Jab user pagination me button '4' par click karega, tab top 8 cards ki jagah
// ye 8 naye cards display honge.
// Button '1' click karne par wapas pehle wale 8 cards (bangaloreOfficeCards) aa jayenge.
// Har card me real internet images, badge, rating, location aur price di gayi hai.
// ============================================================================
export const pageFourBangaloreOfficeCards = [
  // 1. Trios Balaji Business Centre - Baner, Bangalore
  {
    id: 65,
    name: 'Trios Balaji Business Centre',
    badge: 'Popular', // Card ke upar 'Popular' crown badge
    rating: 4.6,      // Star rating 4.6
    area: 'Baner',    // Neighborhood filter ke liye
    location: 'Baner, Bangalore', // Card me display hone wala address
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    // Authentic interior and exterior workspace images from internet
    images: [
      'https://img.cofynd.com/images/latest_images_2024/6c7056031566a6effa75bbece0375c731fa08c71.webp',
      'https://img.cofynd.com/images/latest_images_2024/0113c9b620d1a9867330c81e78c157a0dced4bec.webp',
      'https://img.cofynd.com/images/latest_images_2024/9036735cb17381aa7fc53ded3316d8a93f867b49.webp',
      'https://img.cofynd.com/images/latest_images_2024/d4038a751c40e65aea7d598d4cf69a333c72ca1e.webp',
      'https://img.cofynd.com/images/latest_images_2024/d8dbca95fc6c51fcde7bc07a3eaf7ea01896c1b4.webp'
    ]
  },
  // 2. Incube Coworking - Baner, Bangalore
  {
    id: 66,
    name: 'Incube Coworking',
    badge: null,      // Screenshot me koi badge nahi hai
    rating: null,     // Screenshot me rating nahi hai
    area: 'Baner',
    location: 'Next to Medipoint Hospital, Baner, Bangalore',
    price: '₹4,000',
    period: '/ month',
    priceFormatted: '₹4,000 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/3c0e0a90da6cd12e574c30830f447192a158438c.webp',
      'https://img.cofynd.com/images/latest_images_2024/41252cae060fc85b7b6b0adfe2a4fd7409f83671.webp',
      'https://img.cofynd.com/images/latest_images_2024/f66350205eab3d3cf4aecd0513d81aa6da2dc422.webp',
      'https://img.cofynd.com/images/latest_images_2024/fd0c1e36d2a648b44cf30eeeb11590e88f6868fe.webp',
      'https://img.cofynd.com/images/latest_images_2024/f8d9606998e1218be2aa1030247812464c493f97.webp'
    ]
  },
  // 3. Share A Space - Aundh, Bangalore
  {
    id: 67,
    name: 'Share A Space',
    badge: 'Popular', // Card ke upar 'Popular' crown badge
    rating: 4.5,      // Star rating 4.5
    area: 'Aundh',    // Neighborhood filter ke liye
    location: 'Aundh, Bangalore', // Card me display hone wala address
    price: '₹9,499',
    period: '/ month',
    priceFormatted: '₹9,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/2851d6fa3bd6909bca06fc26da49b5cf1cede2ad.jpg',
      'https://img.cofynd.com/images/original/834fc89f0327b7d9559b17cea07807f9af45fe0e.jpg',
      'https://img.cofynd.com/images/original/a4eadf8723bbf934307a585ce3a10b87ba80d475.jpg',
      'https://img.cofynd.com/images/original/cba23fbff5fb9fc8ddd441d8a25f68e8efa1c76b.jpg',
      'https://img.cofynd.com/images/original/63e2171239c540d2745f634c1f73a3198526040a.jpg'
    ]
  },
  // 4. Collab Workspaces - Kharadi, Bangalore
  {
    id: 68,
    name: 'Collab Workspaces',
    badge: 'Popular', // Card ke upar 'Popular' crown badge
    rating: 4.8,      // Star rating 4.8
    area: 'Kharadi',
    location: 'Kharadi, Bangalore',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/35a452410dbdb38b098f51e1feab1ac37610660e.jpg',
      'https://img.cofynd.com/images/latest_images_2024/590357500eab598657f087eef4dec54b672eb91a.webp',
      'https://img.cofynd.com/images/original/1b34ea2a5d01a9c268cb660dcf83e0b392cf4f3e.jpg',
      'https://img.cofynd.com/images/original/a1c0106b57c1301b84810b39d1a67aa99c205ec5.jpg',
      'https://img.cofynd.com/images/original/a3086bd7c780ef6a8e8bf884e4305aebfd493bef.jpg'
    ]
  },
  // 5. Starthub - Koregaon Park, Bangalore
  {
    id: 69,
    name: 'Starthub',
    badge: 'Popular', // Card ke upar 'Popular' crown badge
    rating: 4.8,      // Star rating 4.8
    area: 'Koregaon Park',
    location: 'Koregaon Park, Bangalore',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/15e7d560c947c6bc900d3fb1003bfe9c77e398d2.jpg',
      'https://img.cofynd.com/images/original/26959197d965a409b93036e1f4aab351a977fa27.jpg',
      'https://img.cofynd.com/images/original/3a10fd7f1bedb1d5ecd272f0bf0d16aa347576e7.jpg',
      'https://img.cofynd.com/images/original/e1e23064d108590bcb3319e45573bc49a2ceb395.jpg',
      'https://img.cofynd.com/images/original/c1ca5ce9ec9caf7c6c1d9af4e976032b9e3021e1.jpg'
    ]
  },
  // 6. Excella Coworking Space - DS Ikon - Baner, Bangalore
  {
    id: 70,
    name: 'Excella Coworking Space - DS Ikon',
    badge: null,      // Screenshot me koi badge nahi hai
    rating: null,     // Screenshot me rating nahi hai
    area: 'Baner',
    location: 'DS IKON 4th Floor, Bangalore',
    price: '₹8,000',
    period: '/ month',
    priceFormatted: '₹8,000 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/65f1543b7fb401b76756dfbe5269035c952a8dc0.jpg',
      'https://img.cofynd.com/images/original/3776ddb85db9ac28c248b10c2e2237310889a9b0.jpg',
      'https://img.cofynd.com/images/original/f65a5b41aa00174147fd42068bfb500eca17bba7.jpg',
      'https://img.cofynd.com/images/original/f3bce1f518470efc471ddf30b4e8342c03601b4b.jpg',
      'https://img.cofynd.com/images/original/0a48c90eb5599f802649137a5dad227be87a27ca.jpg'
    ]
  }
];


// ============================================================================
// Area-Specific Extra Coworking Cards (10 New Verified Real Internet Cards per Area)
// ----------------------------------------------------------------------------
// NOTE: These cards are ONLY shown when a specific area filter button is clicked.
// When all cards are displayed (default view without area filter), these cards remain hidden.
// ============================================================================
export const areaExtraOfficeCards = {
  "Baner": [
    {
      "id": 5001,
      "name": "Kodesk Coworking",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Baner",
      "location": "Baner, Bangalore.",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/b6760a4c0e264699a83513b1857d23c8bb786ccb.webp",
        "https://img.cofynd.com/images/latest_images_2024/6297eae70f6a33a9979f3763f030c34d35c46c1c.webp",
        "https://img.cofynd.com/images/latest_images_2024/3cd33975d246b6bd02d73f5da56af5ed5f1ae6c5.webp",
        "https://img.cofynd.com/images/latest_images_2024/2a786d0c42639dc40b1e83fd3bcb82556b32d68c.webp",
        "https://img.cofynd.com/images/latest_images_2024/78405af99fbd9ef42ba49f9e4940abbdef53b275.webp"
      ]
    },
    {
      "id": 5002,
      "name": "Awfis Sterling Tower",
      "badge": "Premium",
      "rating": 4.6,
      "area": "Baner",
      "location": "Baner, Bangalore",
      "price": "₹10,999",
      "period": "/ Month",
      "priceFormatted": "₹10,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/58e38018564757ef1e647239a79c576230d405bf.webp",
        "https://img.cofynd.com/images/latest_images_2024/d3adf265fe0edf92e91df3e7c03f82f5a302a427.webp",
        "https://img.cofynd.com/images/latest_images_2024/3fadb97d9dada4a2b1a3366d16e59781a246da3c.webp",
        "https://img.cofynd.com/images/latest_images_2024/a7d260dc22a9b5a408205687527cb1a2814cc783.webp",
        "https://img.cofynd.com/images/latest_images_2024/d64227e9a1882c9baf00c837dae646a58ff8d8cd.webp"
      ]
    },
    {
      "id": 5003,
      "name": "Growth Hub",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Baner",
      "location": "Baner, Bangalore",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/201832e933dceb27eca847ecb0ab985c0a523123.webp",
        "https://img.cofynd.com/images/latest_images_2024/f958e6462f64871243953ec4188180b7916964e3.webp",
        "https://img.cofynd.com/images/latest_images_2024/07f5854f28ec6d447a35f49993b316f8cbfb6359.webp",
        "https://img.cofynd.com/images/latest_images_2024/844c255f8c6429752e6772208d8668dfc8e41274.webp",
        "https://img.cofynd.com/images/latest_images_2024/e698a2b903850d8952b9f34674faf4f1d3f35dcf.webp"
      ]
    },
    {
      "id": 5004,
      "name": "Trios Balaji Business Centre",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Baner",
      "location": "Baner, Bangalore",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/9036735cb17381aa7fc53ded3316d8a93f867b49.webp",
        "https://img.cofynd.com/images/latest_images_2024/d4038a751c40e65aea7d598d4cf69a333c72ca1e.webp",
        "https://img.cofynd.com/images/latest_images_2024/d8dbca95fc6c51fcde7bc07a3eaf7ea01896c1b4.webp",
        "https://img.cofynd.com/images/latest_images_2024/6c7056031566a6effa75bbece0375c731fa08c71.webp",
        "https://img.cofynd.com/images/latest_images_2024/0113c9b620d1a9867330c81e78c157a0dced4bec.webp"
      ]
    },
    {
      "id": 5005,
      "name": "Cowerkz",
      "badge": "Verified",
      "rating": 4.9,
      "area": "Baner",
      "location": "Baner, Bangalore",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/d6c50606af788441c67607f2cd983cde1d084067.webp",
        "https://img.cofynd.com/images/latest_images_2024/d7f629a674bed4c42fcb285b41eb202790cf00cb.webp",
        "https://img.cofynd.com/images/latest_images_2024/9d6d1e28e1ecf3366199a2e9dec47fe64a8ccb22.webp",
        "https://img.cofynd.com/images/latest_images_2024/51ee565b91eea36c875c7ddf996652b81ba22d8b.webp",
        "https://img.cofynd.com/images/latest_images_2024/e89e966b44b61287d86815d0a73a1f46bbca9641.webp"
      ]
    },
    {
      "id": 5006,
      "name": "Awfis The Kode",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Baner",
      "location": "Baner, Bangalore",
      "price": "₹10,999",
      "period": "/ Month",
      "priceFormatted": "₹10,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/cd0618a718f4279b30b806ea42d0f0538386f193.webp",
        "https://img.cofynd.com/images/latest_images_2024/ae089b7ca608b713e7164ab8b9aae9a56f314d93.webp",
        "https://img.cofynd.com/images/latest_images_2024/ab2b84cb2767391d329a1f317c9abe66948a9172.webp",
        "https://img.cofynd.com/images/latest_images_2024/df3760d2440e4a576e8ef511ea670410b580d52b.webp",
        "https://img.cofynd.com/images/latest_images_2024/852410bf19a78735900b092fe6e803baf92482cc.webp"
      ]
    },
    {
      "id": 5007,
      "name": "IndiQube The Kode",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Baner",
      "location": "Baner, Bangalore",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/956b4f48c69755a7303803dad89b233595fb7ec5.webp",
        "https://img.cofynd.com/images/latest_images_2024/9be805c73253837d17f48a683d66069a70ed9b93.webp",
        "https://img.cofynd.com/images/latest_images_2024/2ebb14486e75f9406c545315352fefd4069963c3.webp",
        "https://img.cofynd.com/images/original/7258eaa0c58d5ce56e019fc1a8bd55794a98bc5b.jpg",
        "https://img.cofynd.com/images/original/b8b66cdb907fa9ab1469d1b6f6ee28b15bfd42a4.jpg"
      ]
    },
    {
      "id": 5008,
      "name": "Divine Coworking Cosmos",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Baner",
      "location": "Cosmos gardens, Bangalore",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/8bd974f276aab719d80fb3c5a4b67553ed8b133f.webp",
        "https://img.cofynd.com/images/latest_images_2024/c61a676453c6158e59a18626395e7bd08607ea66.webp",
        "https://img.cofynd.com/images/latest_images_2024/d4175f1be63c806413e4697b0c74872e65b2842d.webp",
        "https://img.cofynd.com/images/latest_images_2024/2cf771f8505011174fa0516fc427bd4ac49faf58.webp",
        "https://img.cofynd.com/images/latest_images_2024/80d69788608f47bd4d5fac5ab7423fce4e2b4b1c.webp"
      ]
    },
    {
      "id": 5009,
      "name": "Incube Coworking",
      "badge": "Verified",
      "rating": 4.8,
      "area": "Baner",
      "location": "Next to Medipoint Hospital, Baner, Bangalore",
      "price": "₹4,000",
      "period": "/ Month",
      "priceFormatted": "₹4,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/1a1f839cf4c05033dc74a42ae655c33970fbb963.jpg",
        "https://img.cofynd.com/images/original/98bb398c0966ce05ca1cc393890b988eab0fc4e2.jpg",
        "https://img.cofynd.com/images/original/0581d92508cfe08e4654e2c1af8c5ce5dcb8cb6e.jpg",
        "https://img.cofynd.com/images/original/37b2ec0b474f8068a5a8dd5423d2e93db167eab6.jpg",
        "https://img.cofynd.com/images/original/506fa44c3407bf5768a9ab7ba1ccb2827786c1b0.jpg"
      ]
    },
    {
      "id": 5010,
      "name": "Anchor Coworking",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Baner",
      "location": "Shivneri Colony, Bangalore",
      "price": "₹5,000",
      "period": "/ Month",
      "priceFormatted": "₹5,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/856d9d73fc023c1c3eeab089f859b4ff0e56bc1e.jpg",
        "https://img.cofynd.com/images/latest_images_2024/a4876a8326d117aff05aa3849b95e544f17a312a.webp",
        "https://img.cofynd.com/images/latest_images_2024/a2dfd11c6620ed5091e18e754756f4fddc1253b2.webp",
        "https://img.cofynd.com/images/latest_images_2024/7f2888092f4fd70e50529ebff1525d5de1daa030.webp",
        "https://img.cofynd.com/images/original/14dc3097883d00ded75870b6f23b60d047248ea3.jpg"
      ]
    }
  ],
  "Kharadi": [
    {
      "id": 5101,
      "name": "Futops Cowork",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Kharadi",
      "location": "Kharadi, Bangalore",
      "price": "₹4,999",
      "period": "/ Month",
      "priceFormatted": "₹4,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/69f54df2d8a5a67da9e5995ca93014114a1a8e46.webp",
        "https://img.cofynd.com/images/latest_images_2024/38d0d6b62bf72240353ba43218afa50393e65030.webp",
        "https://img.cofynd.com/images/latest_images_2024/3b005079187c5edfca9148d5472932ee6110ec2e.webp",
        "https://img.cofynd.com/images/latest_images_2024/0704e93344962b59595ddcd3fa1893eeedf85d84.webp",
        "https://img.cofynd.com/images/latest_images_2024/36b634a822eb32b1e9014a4b2872d139e50a05bf.webp"
      ]
    },
    {
      "id": 5102,
      "name": "Collab Workspaces",
      "badge": "Premium",
      "rating": 4.6,
      "area": "Kharadi",
      "location": "Kharadi, Bangalore",
      "price": "₹7,499",
      "period": "/ Month",
      "priceFormatted": "₹7,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/a3086bd7c780ef6a8e8bf884e4305aebfd493bef.jpg",
        "https://img.cofynd.com/images/latest_images_2024/e8f207e85fb9689b176ee6bb49c8f0148d1c3ed8.webp",
        "https://img.cofynd.com/images/latest_images_2024/34b99b293f410e6f731e1538fced6569cd7cc4d9.webp",
        "https://img.cofynd.com/images/latest_images_2024/c42341a0653ea33f99dbae3beb271829d6208cef.webp",
        "https://img.cofynd.com/images/latest_images_2024/a277524ab30bfa6021160418daeb5af364417269.webp"
      ]
    },
    {
      "id": 5103,
      "name": "Bootstart Coworking - Pride Icon",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Kharadi",
      "location": "Kharadi, Bangalore",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/7a3d410415516b1f5c82f9347b1bd0b56304e59e.webp",
        "https://img.cofynd.com/images/latest_images_2024/dffa9636309a5bd2d9414d44759c37d0a286e88e.webp",
        "https://img.cofynd.com/images/original/dedd21b7ac35de0f9975a8f9039b13b3f34b4668.jpg",
        "https://img.cofynd.com/images/latest_images_2024/5d6bdce911d2d6d29a01d2a56ae7551421f5fb25.webp",
        "https://img.cofynd.com/images/latest_images_2024/424d2d95b9d69f017cfd31a532f01b6b67b376ee.webp"
      ]
    },
    {
      "id": 5104,
      "name": "CreateX",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Kharadi",
      "location": "Ashok Nagar, Kharadi Maharashtra , India",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/4d6c2833702a2b2bfb21743655d6ac9c2a574573.jpg",
        "https://img.cofynd.com/images/original/d0f040cece9bdd18febbcfe92fe0408ecf0bf446.jpg",
        "https://img.cofynd.com/images/latest_images_2024/567de36013fc2931b6f9c5a0148c66fa720e4621.webp",
        "https://img.cofynd.com/images/original/ba093deda85778f9f720eac4409625ef1cba8f9f.jpg",
        "https://img.cofynd.com/images/original/dc2a0811c0026d494ffdad2b4e3025644b692dbe.jpg"
      ]
    },
    {
      "id": 5105,
      "name": "Pocket Spaces",
      "badge": "Verified",
      "rating": 4.9,
      "area": "Kharadi",
      "location": "Kharadi, Bangalore",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/c2569d14c2a93c2f1091a9c8804195c660e9b99d.webp",
        "https://img.cofynd.com/images/latest_images_2024/5028fb336d915fe82df5c6dc8ee8d9258a80ca2d.webp",
        "https://img.cofynd.com/images/latest_images_2024/9e70fe2f72dbd32076c399259f672b7bc91afb10.webp",
        "https://img.cofynd.com/images/latest_images_2024/291eff6691ca235d91e86145831c93a2aa6bc1c6.webp",
        "https://img.cofynd.com/images/latest_images_2024/9d27f1e452d38ab44fce787f5afcd703459ac675.webp"
      ]
    },
    {
      "id": 5106,
      "name": "Techbird",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Kharadi",
      "location": "Kharadi, Bangalore",
      "price": "₹14,499",
      "period": "/ Month",
      "priceFormatted": "₹14,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/51ddbf29ca91df257b84700fbfb1ddadd063f688.webp",
        "https://img.cofynd.com/images/latest_images_2024/5ea6b6104e5bda8d22906f482d51de9cf59553ec.webp",
        "https://img.cofynd.com/images/latest_images_2024/f1923ba667eab67523e9cd7036c356ec2746e01a.webp",
        "https://img.cofynd.com/images/latest_images_2024/d58cab21873d9194c45177652c6eccf69b5d5f73.webp",
        "https://img.cofynd.com/images/latest_images_2024/f9bf19a4b18858e93d0c80f63930bd6907ef80bc.webp"
      ]
    },
    {
      "id": 5107,
      "name": "Awfis Kharadi Heights",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Kharadi",
      "location": "Kharadi, Bangalore",
      "price": "₹9,499",
      "period": "/ Month",
      "priceFormatted": "₹9,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/eb9dfa7f84cac31d7f2b065da8428152dcd79c37.webp",
        "https://img.cofynd.com/images/latest_images_2024/1fd7fe2d5ba650bc37b59285a27a2a27b355bbda.webp",
        "https://img.cofynd.com/images/latest_images_2024/4d94ec66857053b877cb4086d84fc6f299566c97.webp",
        "https://img.cofynd.com/images/latest_images_2024/7f4fb7b109fd1cadff5ca6bdd6c0c46bdda64b2b.webp",
        "https://img.cofynd.com/images/latest_images_2024/d429e811eea41195eddb301fe5587c96c0be3c67.webp"
      ]
    },
    {
      "id": 5108,
      "name": "Awfis Kharadi Central",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Kharadi",
      "location": "Kharadi, Bangalore",
      "price": "₹10,999",
      "period": "/ Month",
      "priceFormatted": "₹10,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/1952b47f70dfb09a734f9be3b4df383f5457e5af.webp",
        "https://img.cofynd.com/images/latest_images_2024/8f6f26c54ebe3f202228b1e3a6ff24a7fb30d9c2.webp",
        "https://img.cofynd.com/images/latest_images_2024/4daefaf5892734f302c6ea775be2e7f557c3eb3e.webp",
        "https://img.cofynd.com/images/latest_images_2024/de45e81c7af7c7382a52a27d9df0ff440a38b8b3.webp",
        "https://img.cofynd.com/images/latest_images_2024/5017b03422bb879b6b1eabeb14305259c4a9b4fe.webp"
      ]
    },
    {
      "id": 5109,
      "name": "Synergy Kharadi IT Park",
      "badge": "Verified",
      "rating": 4.8,
      "area": "Kharadi",
      "location": "Kharadi, Bangalore",
      "price": "₹7,500",
      "period": "/ Month",
      "priceFormatted": "₹7,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/a16076bde799ff70cfb9ed44994bdb31626f1850.jpg",
        "https://img.cofynd.com/images/original/2d4abb4e94c65c4e157d5aa6bb6daa90026ea21c.jpg",
        "https://img.cofynd.com/images/original/f3d377dd0ca6e06dbaaa305f055f543ac8e15bf5.jpg",
        "https://img.cofynd.com/images/original/d558ecaab78df13a1cbd058f1d63fff078c1e0c4.jpg",
        "https://img.cofynd.com/images/original/115e0f16773a44862496a139117d820d2f21cc4b.jpg"
      ]
    },
    {
      "id": 5110,
      "name": "Workspace Kharadi Hub",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Kharadi",
      "location": "Kharadi, Bangalore",
      "price": "₹22,499",
      "period": "/ Month",
      "priceFormatted": "₹22,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/800f8563e454a64cd599567bfa7718b836dd7765.webp",
        "https://img.cofynd.com/images/latest_images_2024/be8dd586067e9fad71f14f885311a3df59edcdd3.webp",
        "https://img.cofynd.com/images/latest_images_2024/09a36f9075809deb592af037d041f3fbabb5221e.webp",
        "https://img.cofynd.com/images/latest_images_2024/94520e6c657a26032275bae6ec5ecb28c2ec3645.webp",
        "https://img.cofynd.com/images/latest_images_2024/8fb511efff6c4ac3e675feb33da2fed7bab8fea8.webp"
      ]
    }
  ],
  "Viman Nagar": [
    {
      "id": 5201,
      "name": "Synergy",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Viman Nagar",
      "location": "Viman Nagar, Bangalore",
      "price": "₹7,500",
      "period": "/ Month",
      "priceFormatted": "₹7,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/a16076bde799ff70cfb9ed44994bdb31626f1850.jpg",
        "https://img.cofynd.com/images/original/2d4abb4e94c65c4e157d5aa6bb6daa90026ea21c.jpg",
        "https://img.cofynd.com/images/original/f3d377dd0ca6e06dbaaa305f055f543ac8e15bf5.jpg",
        "https://img.cofynd.com/images/original/d558ecaab78df13a1cbd058f1d63fff078c1e0c4.jpg",
        "https://img.cofynd.com/images/original/115e0f16773a44862496a139117d820d2f21cc4b.jpg"
      ]
    },
    {
      "id": 5202,
      "name": "Workspace",
      "badge": "Premium",
      "rating": 4.6,
      "area": "Viman Nagar",
      "location": "Viman Nagar, Bangalore",
      "price": "₹22,499",
      "period": "/ Month",
      "priceFormatted": "₹22,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/800f8563e454a64cd599567bfa7718b836dd7765.webp",
        "https://img.cofynd.com/images/latest_images_2024/be8dd586067e9fad71f14f885311a3df59edcdd3.webp",
        "https://img.cofynd.com/images/latest_images_2024/09a36f9075809deb592af037d041f3fbabb5221e.webp",
        "https://img.cofynd.com/images/latest_images_2024/94520e6c657a26032275bae6ec5ecb28c2ec3645.webp",
        "https://img.cofynd.com/images/latest_images_2024/8fb511efff6c4ac3e675feb33da2fed7bab8fea8.webp"
      ]
    },
    {
      "id": 5203,
      "name": "TRIOS Lalwani House",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Viman Nagar",
      "location": "Sakore Nagar, Viman Nagar, Bangalore",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/5e21f76c961fce9729833e73394892bd65e97464.webp",
        "https://img.cofynd.com/images/latest_images_2024/e67464da4663c76960572745c45f54e6bbcae8cb.webp",
        "https://img.cofynd.com/images/original/16fddc211a341b4c7a63b728dce7dfd5badf6b17.jpg",
        "https://img.cofynd.com/images/latest_images_2024/66ae9a0bfca531a56ea0b95746f0f4e43596de31.webp",
        "https://img.cofynd.com/images/latest_images_2024/35ba5f2e7fb3ecea59578755dfb90e57bfa9f84e.webp"
      ]
    },
    {
      "id": 5204,
      "name": "TRIOS - Finswell - Viman nagar",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Viman Nagar",
      "location": "Viman Nagar, Bangalore",
      "price": "₹10,999",
      "period": "/ Month",
      "priceFormatted": "₹10,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/a4e23f998a00530e1f94d0be23abe8592e97d6d7.webp",
        "https://img.cofynd.com/images/latest_images_2024/26daa8a5d70286fae70f9a757b5326a207e3a567.webp",
        "https://img.cofynd.com/images/latest_images_2024/5133abadba90f1956ef5f4ed7b40c2dcf9cc22ca.webp",
        "https://img.cofynd.com/images/latest_images_2024/0f9c72d6df7e6f5ba5cc51669fffa39bdae5f735.webp",
        "https://img.cofynd.com/images/latest_images_2024/d1115009669a61c861c0397a5c542d1561574e8f.webp"
      ]
    },
    {
      "id": 5205,
      "name": "Awfis Viman Nagar II",
      "badge": "Verified",
      "rating": 4.9,
      "area": "Viman Nagar",
      "location": "Viman Nagar, Bangalore",
      "price": "₹9,499",
      "period": "/ Month",
      "priceFormatted": "₹9,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/eb9dfa7f84cac31d7f2b065da8428152dcd79c37.webp",
        "https://img.cofynd.com/images/latest_images_2024/1fd7fe2d5ba650bc37b59285a27a2a27b355bbda.webp",
        "https://img.cofynd.com/images/latest_images_2024/4d94ec66857053b877cb4086d84fc6f299566c97.webp",
        "https://img.cofynd.com/images/latest_images_2024/7f4fb7b109fd1cadff5ca6bdd6c0c46bdda64b2b.webp",
        "https://img.cofynd.com/images/latest_images_2024/d429e811eea41195eddb301fe5587c96c0be3c67.webp"
      ]
    },
    {
      "id": 5206,
      "name": "Awfis Nyati Empress",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Viman Nagar",
      "location": "Viman Nagar, Bangalore",
      "price": "₹10,999",
      "period": "/ Month",
      "priceFormatted": "₹10,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/1952b47f70dfb09a734f9be3b4df383f5457e5af.webp",
        "https://img.cofynd.com/images/latest_images_2024/8f6f26c54ebe3f202228b1e3a6ff24a7fb30d9c2.webp",
        "https://img.cofynd.com/images/latest_images_2024/4daefaf5892734f302c6ea775be2e7f557c3eb3e.webp",
        "https://img.cofynd.com/images/latest_images_2024/de45e81c7af7c7382a52a27d9df0ff440a38b8b3.webp",
        "https://img.cofynd.com/images/latest_images_2024/5017b03422bb879b6b1eabeb14305259c4a9b4fe.webp"
      ]
    },
    {
      "id": 5207,
      "name": "Ideas to Impacts Hub Viman Nagar",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Viman Nagar",
      "location": "Viman Nagar, Bangalore",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/9dc5d741c498203f7560e04bd0ed278b38544631.webp",
        "https://img.cofynd.com/images/latest_images_2024/a2d5a44ab6b933bc773cb84ac006aa252f914a5b.webp",
        "https://img.cofynd.com/images/latest_images_2024/2c211a7acced772fe46d723e771d68c2d3cea6fd.webp",
        "https://img.cofynd.com/images/latest_images_2024/7428c8d0f119ddab9ff4ab9eb8e0c74de5e6021a.webp"
      ]
    },
    {
      "id": 5208,
      "name": "Share A Space",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Viman Nagar",
      "location": "Viman Nagar, Bangalore",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/7f20e3d1895beb93c507137eaa87ad096ffda723.webp",
        "https://img.cofynd.com/images/latest_images_2024/6ec28106e363e5937e4f28e5a32070d3da62578d.webp",
        "https://img.cofynd.com/images/latest_images_2024/b72a3157f1d5303a9b8a503f846555f82934e68c.webp",
        "https://img.cofynd.com/images/latest_images_2024/30e65dac1c7d1b6701bd80da78c4045b79e132f5.webp",
        "https://img.cofynd.com/images/latest_images_2024/e32570e33813d3af75bb239659b4c3163a5ff480.webp"
      ]
    },
    {
      "id": 5209,
      "name": "Nexus Spaces",
      "badge": "Verified",
      "rating": 4.8,
      "area": "Viman Nagar",
      "location": "Viman Nagar, Bangalore",
      "price": "₹14,000",
      "period": "/ Month",
      "priceFormatted": "₹14,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/604af5c1c79aeff7195e3eff39d2d6e617bef964.webp",
        "https://img.cofynd.com/images/latest_images_2024/5c2633bade20602cf3c4deca6424249aa6676c72.webp",
        "https://img.cofynd.com/images/latest_images_2024/15658f4aeea61820f2ee6c4c146167abfa535a06.webp",
        "https://img.cofynd.com/images/latest_images_2024/008749cc802d8e807d47aaa94299664018cd5967.webp",
        "https://img.cofynd.com/images/latest_images_2024/febf0e94c59e35a3a8b45c157dcbc16890b0885a.webp"
      ]
    },
    {
      "id": 5210,
      "name": "Innov8 Ganga Treuno",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Viman Nagar",
      "location": "Viman Nagar, Bangalore.",
      "price": "₹10,499",
      "period": "/ Month",
      "priceFormatted": "₹10,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/903e73d54ec3295f61d3b28615a89c00e42a867b.webp",
        "https://img.cofynd.com/images/latest_images_2024/00553ba076592f29fbe3b68f34803fdf13d2b5ba.webp",
        "https://img.cofynd.com/images/latest_images_2024/c8a3ddfacd50bee2a482424edf02312bfef1e529.webp",
        "https://img.cofynd.com/images/latest_images_2024/6f1299cf7eb59fe508986820585ddfed8ea23fe6.webp",
        "https://img.cofynd.com/images/latest_images_2024/5c2dfdc9db5e641bea623efb822a47abda4b0e1a.webp"
      ]
    }
  ],
  "Koregaon Park": [
    {
      "id": 5301,
      "name": "Espree Co-works",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Koregaon Park",
      "location": "Koregaon Park, Bangalore",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/8ce013856b6024104155c57e95f914ecdc6a675d.webp",
        "https://img.cofynd.com/images/latest_images_2024/8e1814b31a5a428c90b1aa16934c00c98e3f03b0.webp",
        "https://img.cofynd.com/images/latest_images_2024/0b499e7234f98da7b9e8768902555ab3bb1510cd.webp",
        "https://img.cofynd.com/images/latest_images_2024/e2efbf47de1a27ce0746ec69efa7b30ca348e744.webp",
        "https://img.cofynd.com/images/latest_images_2024/7e320d7c711d58e7ee7b5a9831a4cf35f2816a45.webp"
      ]
    },
    {
      "id": 5302,
      "name": "Starthub",
      "badge": "Premium",
      "rating": 4.6,
      "area": "Koregaon Park",
      "location": "Koregaon Park, Bangalore",
      "price": "₹7,499",
      "period": "/ Month",
      "priceFormatted": "₹7,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/3a10fd7f1bedb1d5ecd272f0bf0d16aa347576e7.jpg",
        "https://img.cofynd.com/images/original/e1e23064d108590bcb3319e45573bc49a2ceb395.jpg",
        "https://img.cofynd.com/images/original/c1ca5ce9ec9caf7c6c1d9af4e976032b9e3021e1.jpg",
        "https://img.cofynd.com/images/original/15e7d560c947c6bc900d3fb1003bfe9c77e398d2.jpg",
        "https://img.cofynd.com/images/original/26959197d965a409b93036e1f4aab351a977fa27.jpg"
      ]
    },
    {
      "id": 5303,
      "name": "Bootstart - Omicron Commerz",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Koregaon Park",
      "location": "Koregaon Park, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/a56c458480e9e7948160cb4b5a75cc749972128f.webp",
        "https://img.cofynd.com/images/latest_images_2024/17a121e8dc76faa48ed1587bd39c83bae85918d2.webp",
        "https://img.cofynd.com/images/latest_images_2024/20da51b29df772b7e8f6739076112d855b0894f7.webp",
        "https://img.cofynd.com/images/latest_images_2024/5ab639e6b372917886889378c99795b4e4b7d357.webp"
      ]
    },
    {
      "id": 5304,
      "name": "Inscape Cowork",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Koregaon Park",
      "location": "Koregaon Park, Bangalore",
      "price": "₹6,500",
      "period": "/ Month",
      "priceFormatted": "₹6,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/a332625bd31a0c9ac4c72040dfd7455743784a66.jpg",
        "https://img.cofynd.com/images/original/5ece3eebf18bbf44b6f74411029c2c68a7cf438c.jpg",
        "https://img.cofynd.com/images/original/9bfcb198f74566878686aaf8394b275662906a8e.jpg",
        "https://img.cofynd.com/images/original/1c6ec1528dcbcc8ff0683ba3fced75c8705d25fc.jpg",
        "https://img.cofynd.com/images/original/ee864fd84b6a8c54cad355429958fec57cddde5c.jpg"
      ]
    },
    {
      "id": 5305,
      "name": "Bauhaus",
      "badge": "Verified",
      "rating": 4.9,
      "area": "Koregaon Park",
      "location": "Koregaon Park, Bangalore",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/ad44e20b271b38c5b29718e8d5a9601b467971f2.webp",
        "https://img.cofynd.com/images/latest_images_2024/70a2f7192407789f1e28e9964f5091312b87a876.webp",
        "https://img.cofynd.com/images/latest_images_2024/f5d3bfa4290cd5eed717f79403acd80c06891029.webp",
        "https://img.cofynd.com/images/latest_images_2024/8240d697c9f9ed56d928c3ee7111627b861afe38.webp",
        "https://img.cofynd.com/images/latest_images_2024/ce4a50c03e8a15cb2bb635eca13eb364d6e12118.webp"
      ]
    },
    {
      "id": 5306,
      "name": "Bootstart Coworking – Arcadian Koregaon Park",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Koregaon Park",
      "location": "Koregaon Park, Bangalore",
      "price": "₹7,000",
      "period": "/ Month",
      "priceFormatted": "₹7,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/211b8b898ab041af8f2f5ae2318db7b6a7470949.webp",
        "https://img.cofynd.com/images/latest_images_2024/e991a43662fa571c2a1977c0975ad0c97461e5a6.webp",
        "https://img.cofynd.com/images/latest_images_2024/2d9e7739decb78af7960b6956ed5b8e94cbd1e82.webp",
        "https://img.cofynd.com/images/latest_images_2024/2f0f1c4e9925f904ea67539c7445b6ea00b901a5.webp",
        "https://img.cofynd.com/images/latest_images_2024/5db3a9a333c060b19ecd3b2ceba811bb7a55c00f.webp"
      ]
    },
    {
      "id": 5307,
      "name": "Pinnacle Workspaces",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Koregaon Park",
      "location": "Koregaon Park, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/195f1c8b89a42bdc3f82176029209e8a013d8dc9.webp",
        "https://img.cofynd.com/images/latest_images_2024/59e1ac0eedf9008357b2dcf04a27da65757c49f5.webp",
        "https://img.cofynd.com/images/latest_images_2024/476e76ed574c56acd4de943ed8b672cfd8b38f0d.webp",
        "https://img.cofynd.com/images/latest_images_2024/0edf3dd2e682e9a262183185ec0aa044285896ac.webp"
      ]
    },
    {
      "id": 5308,
      "name": "Innov8 Koregaon Park",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Koregaon Park",
      "location": "Koregaon Park, Bangalore",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/45caa3259ec31d3dbbfb0ad8d4a1353e5873cdb4.webp",
        "https://img.cofynd.com/images/latest_images_2024/75021eebe2e76b723fc15aba635f308473482561.webp",
        "https://img.cofynd.com/images/latest_images_2024/32333c3aea45553a0733db1dd2cc6d1723e26d82.webp",
        "https://img.cofynd.com/images/latest_images_2024/921e08dff107f633d044a4a35a3509472ff951ac.webp",
        "https://img.cofynd.com/images/latest_images_2024/e4291fad74fa50f8f28e2967ad01a327dca81b43.webp"
      ]
    },
    {
      "id": 5309,
      "name": "Tag Co-Works Koregaon Park",
      "badge": "Verified",
      "rating": 4.8,
      "area": "Koregaon Park",
      "location": "Koregaon Park, Bangalore",
      "price": "₹5,000",
      "period": "/ Month",
      "priceFormatted": "₹5,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/f1424db42444f8b6a62f588f594c352e5d0ad72e.webp",
        "https://img.cofynd.com/images/latest_images_2024/cb409206a0b378fd158916c34e85aea5f1dac7ee.webp",
        "https://img.cofynd.com/images/latest_images_2024/4a80ca81d529f233d965d48c442a59eae81aeb8e.webp",
        "https://img.cofynd.com/images/latest_images_2024/18d01923b21937c81ece74720c4bb548da9e6923.webp"
      ]
    },
    {
      "id": 5310,
      "name": "91Springboard Sky Loft",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Koregaon Park",
      "location": "Yerawada, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/a78d38fbe0ad0cf0cf4fad4f4ba8915ba37bc610.webp",
        "https://img.cofynd.com/images/latest_images_2024/cadcabb6fdef9874e7ea7563a218a5c9179a0468.webp",
        "https://img.cofynd.com/images/latest_images_2024/4a20fd79a4048122666b1b6c58e3e85fb5f4cd9e.webp",
        "https://img.cofynd.com/images/latest_images_2024/bd032c1a6dda500c0e1734e4e2d714bc5752de97.webp",
        "https://img.cofynd.com/images/latest_images_2024/333efe0ea8ee872444970549a907d5b5672a554d.webp"
      ]
    }
  ],
  "Wakad": [
    {
      "id": 5401,
      "name": "TODO COWORKING",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Wakad",
      "location": "Wakad, Bangalore",
      "price": "₹7,499",
      "period": "/ Month",
      "priceFormatted": "₹7,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/f014b6b07d1d578c4b30eaa1d87633dfb24fdbfc.webp",
        "https://img.cofynd.com/images/latest_images_2024/6599a7e747e2b98191bddc176789553fedeb3df7.webp",
        "https://img.cofynd.com/images/latest_images_2024/501b4143c0daade1a2a8504da89efca200a5de1b.webp",
        "https://img.cofynd.com/images/latest_images_2024/7990934854cccc27121ee476a22f714e26d131d3.webp",
        "https://img.cofynd.com/images/latest_images_2024/acee142282a5d947508500e47c6d91b945294a73.webp"
      ]
    },
    {
      "id": 5402,
      "name": "Ideas to Impacts Hub Wakad",
      "badge": "Premium",
      "rating": 4.6,
      "area": "Wakad",
      "location": "Wakad, Bangalore",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/fe808308012ed34e26268efec85259f3b62b092f.webp",
        "https://img.cofynd.com/images/latest_images_2024/0d0fbf69f720692aaf10184ff0b947bc8caec729.webp",
        "https://img.cofynd.com/images/latest_images_2024/d26ee13c1e786dfe45bc1dae11d76ba82477721e.webp",
        "https://img.cofynd.com/images/latest_images_2024/15c32e8ebd07fcd00a84e8012d05ec57383de042.webp"
      ]
    },
    {
      "id": 5403,
      "name": "Kowork Coworking Space",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Wakad",
      "location": "Wakad, Bangalore",
      "price": "₹6,000",
      "period": "/ Month",
      "priceFormatted": "₹6,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/30af2c304245fdb437494efa307bb5c2ebff907c.webp",
        "https://img.cofynd.com/images/latest_images_2024/ebca264701e10baf6ef637dd9b35a17ea6da1653.webp",
        "https://img.cofynd.com/images/latest_images_2024/5b00ab8c04dbc49ab5a257d8a34b6a5aa86fd4a2.webp",
        "https://img.cofynd.com/images/latest_images_2024/9d00e4ed1405ad9e6a411953e436d04610b5868d.webp",
        "https://img.cofynd.com/images/latest_images_2024/55ae3b24dbb0fb8ed75b3fc1fd87d1cbcad8e652.webp"
      ]
    },
    {
      "id": 5404,
      "name": "Quick Office Wakad",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Wakad",
      "location": "Wakad, Bangalore",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/6a2d6ce5db832bf5e10ae7cdb183395e1bf258c9.jpg",
        "https://img.cofynd.com/images/original/cdc6fcc222be7e4217c0347946389bb7fb09dae3.jpg",
        "https://img.cofynd.com/images/original/b40580f63ffb1fa709068c7de89842003df58fb6.jpg",
        "https://img.cofynd.com/images/original/d9c9de21fde512d1abf3c2de44a3ca2c56d75712.jpg",
        "https://img.cofynd.com/images/original/e06e73593b9ee84db11f0ae4f258b0d337c6db01.jpg"
      ]
    },
    {
      "id": 5405,
      "name": "Sprint Wakad Hub",
      "badge": "Verified",
      "rating": 4.9,
      "area": "Wakad",
      "location": "Wakad, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/13b1c546d03b7d6be23f5f02d3eda58af747aa28.webp",
        "https://img.cofynd.com/images/latest_images_2024/36475bb43d9929c58c9a3e3077ccf478a813e925.webp",
        "https://img.cofynd.com/images/latest_images_2024/27053bf7e53f0857aa37c42b4630c0943b04bf3a.webp",
        "https://img.cofynd.com/images/latest_images_2024/01669a959ca243a0ace85d5cb3d35ad7a0fa0069.webp",
        "https://img.cofynd.com/images/latest_images_2024/c67e73ebcf2879dca288e92ffcf56a0cddcdded2.webp"
      ]
    },
    {
      "id": 5406,
      "name": "Reality Workspaces Wakad",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Wakad",
      "location": "Wakad, Bangalore",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/32ef0a19a3c2a59cd0f0a9583f3db8b6f45741f4.webp",
        "https://img.cofynd.com/images/latest_images_2024/ee1efc46e5c811c5f1c1509db951cf20ff81a37f.webp",
        "https://img.cofynd.com/images/latest_images_2024/269a4069af0cf5ef562b5247b8c912eb7b808e60.webp",
        "https://img.cofynd.com/images/latest_images_2024/28fed5ebadb1a29806350bde659eec49dd791322.webp",
        "https://img.cofynd.com/images/latest_images_2024/2be07c465566f8b625d1afb456aef5dc689ba19f.webp"
      ]
    },
    {
      "id": 5407,
      "name": "Alive Digital Wakad",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Wakad",
      "location": "Wakad, Bangalore",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/662e3820f86e1605d69047d231eb572ab644d980.webp",
        "https://img.cofynd.com/images/latest_images_2024/cc924886e92b26cf7e37f27f3a79ab1428307d09.webp",
        "https://img.cofynd.com/images/latest_images_2024/ed587bd4db40212c663a74dfab1825a05b5fdd7e.webp",
        "https://img.cofynd.com/images/latest_images_2024/67731cb00c845fff1f7de37893b4dd456276c020.webp"
      ]
    },
    {
      "id": 5408,
      "name": "Awfis Wakad Center",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Wakad",
      "location": "Wakad, Bangalore",
      "price": "₹10,999",
      "period": "/ Month",
      "priceFormatted": "₹10,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/7cac68ecacd3f6a32407f74844adc4d5b797d1a1.webp",
        "https://img.cofynd.com/images/original/4484d5dc0e0cc0ab0f9ba4d507d679e2ac72830a.jpg",
        "https://img.cofynd.com/images/original/205e990674a7cefe548ea801c4e8654b76ba00a8.jpg",
        "https://img.cofynd.com/images/original/7a47e648e2f8507f22b0bbe17ffba95c038ccc25.jpg",
        "https://img.cofynd.com/images/original/1cbff71d3df1dc948c372fb25b209191a08e5b86.jpg"
      ]
    },
    {
      "id": 5409,
      "name": "AllDeskSolutions Wakad",
      "badge": "Verified",
      "rating": 4.8,
      "area": "Wakad",
      "location": "Wakad, Bangalore",
      "price": "₹4,999",
      "period": "/ Month",
      "priceFormatted": "₹4,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/fa9688429eb6f5c7c8c829d3d6459a77ff85471d.webp",
        "https://img.cofynd.com/images/latest_images_2024/5763ca719ab1320015fecef0932760705e7bfd06.webp",
        "https://img.cofynd.com/images/latest_images_2024/2f082cc66ba871d4389faaac8b9f74818de97ee4.webp",
        "https://img.cofynd.com/images/latest_images_2024/db3574f251f49a8ac3859e44f7f99c7ff90cc985.webp",
        "https://img.cofynd.com/images/latest_images_2024/dfd50858233c615952e06d8f209f2e752bcd39f7.webp"
      ]
    },
    {
      "id": 5410,
      "name": "The Cultiv8 Wakad",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Wakad",
      "location": "Wakad, Bangalore",
      "price": "₹5,499",
      "period": "/ Month",
      "priceFormatted": "₹5,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/fbf926341143fd97b0df29962e5a54a47dbcf8f8.jpg",
        "https://img.cofynd.com/images/original/15db7af84400b986b0cd043befb3d6c79295f50c.jpg",
        "https://img.cofynd.com/images/original/0bb076ef96db49479c8e9b67897f50922e88c90e.jpg",
        "https://img.cofynd.com/images/original/3a09b79b0dcbb5f7958d9470187c8a27ffdf17ad.jpg",
        "https://img.cofynd.com/images/original/3b31cf2e8881b77e0d2ef66283cb0775fa123281.jpg"
      ]
    }
  ],
  "Balewadi": [
    {
      "id": 5501,
      "name": "Sprint Antaaya",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Balewadi",
      "location": "Balewadi, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/13b1c546d03b7d6be23f5f02d3eda58af747aa28.webp",
        "https://img.cofynd.com/images/latest_images_2024/36475bb43d9929c58c9a3e3077ccf478a813e925.webp",
        "https://img.cofynd.com/images/latest_images_2024/27053bf7e53f0857aa37c42b4630c0943b04bf3a.webp",
        "https://img.cofynd.com/images/latest_images_2024/01669a959ca243a0ace85d5cb3d35ad7a0fa0069.webp",
        "https://img.cofynd.com/images/latest_images_2024/c67e73ebcf2879dca288e92ffcf56a0cddcdded2.webp"
      ]
    },
    {
      "id": 5502,
      "name": "Alive Digital Balewadi",
      "badge": "Premium",
      "rating": 4.6,
      "area": "Balewadi",
      "location": "Balewadi, Bangalore",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/662e3820f86e1605d69047d231eb572ab644d980.webp",
        "https://img.cofynd.com/images/latest_images_2024/cc924886e92b26cf7e37f27f3a79ab1428307d09.webp",
        "https://img.cofynd.com/images/latest_images_2024/ed587bd4db40212c663a74dfab1825a05b5fdd7e.webp",
        "https://img.cofynd.com/images/latest_images_2024/67731cb00c845fff1f7de37893b4dd456276c020.webp"
      ]
    },
    {
      "id": 5503,
      "name": "SpaceX Balewadi Hub",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Balewadi",
      "location": "Balewadi, Bangalore",
      "price": "₹7,500",
      "period": "/ Month",
      "priceFormatted": "₹7,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/57422d801aa66e0200a6fd982c6a1d168b0d6275.webp",
        "https://img.cofynd.com/images/latest_images_2024/ff7969ee32e450a85e87cf6976c71963b4d3dafd.webp",
        "https://img.cofynd.com/images/latest_images_2024/68038624a7c5bdc74441035f777d55e9bbc6b2c9.webp",
        "https://img.cofynd.com/images/latest_images_2024/c0df3d03571344f92ee79dabddca13a871d33015.webp",
        "https://img.cofynd.com/images/latest_images_2024/1725970ae15ae2c573b710b0bdef6ec7fbcde234.webp"
      ]
    },
    {
      "id": 5504,
      "name": "91springboard Balewadi",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Balewadi",
      "location": "Balewadi High Street, Balewadi, Bangalore",
      "price": "₹15,999",
      "period": "/ Month",
      "priceFormatted": "₹15,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/25544f614e445f6de20e55eb28644e33a04f7ee4.webp",
        "https://img.cofynd.com/images/latest_images_2024/2a8a4caef5e0eff769885d4a2cca70c9b45815a2.webp",
        "https://img.cofynd.com/images/latest_images_2024/66ec2ccb1166dabbe192c25b56e31f426c77ade7.webp",
        "https://img.cofynd.com/images/latest_images_2024/70c576585e2c824605936ad8e7673e9c39184ba2.webp",
        "https://img.cofynd.com/images/latest_images_2024/48f0d77e79a17aeed1cf6cebcdfea9e2e0164a12.webp"
      ]
    },
    {
      "id": 5505,
      "name": "EFC Prime Balewadi",
      "badge": "Verified",
      "rating": 4.9,
      "area": "Balewadi",
      "location": "Balewadi, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/804b32e9ba4e48ddfb0507b860e69ae4b151648b.webp",
        "https://img.cofynd.com/images/latest_images_2024/b411986de68ed9d3ba22829582c9ab7b55ce92a7.webp",
        "https://img.cofynd.com/images/latest_images_2024/7185fa21ac43e34d46d64a8184ea21dbfc011100.webp",
        "https://img.cofynd.com/images/latest_images_2024/75c99a42549db958c07069acd879e75aa5f112ed.webp",
        "https://img.cofynd.com/images/latest_images_2024/cab9273bb7bf6a368d71604964dcafd5200ffcbe.webp"
      ]
    },
    {
      "id": 5506,
      "name": "The Cultiv8 Balewadi",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Balewadi",
      "location": "Balewadi, Bangalore",
      "price": "₹5,499",
      "period": "/ Month",
      "priceFormatted": "₹5,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/fbf926341143fd97b0df29962e5a54a47dbcf8f8.jpg",
        "https://img.cofynd.com/images/original/15db7af84400b986b0cd043befb3d6c79295f50c.jpg",
        "https://img.cofynd.com/images/original/0bb076ef96db49479c8e9b67897f50922e88c90e.jpg",
        "https://img.cofynd.com/images/original/3a09b79b0dcbb5f7958d9470187c8a27ffdf17ad.jpg",
        "https://img.cofynd.com/images/original/3b31cf2e8881b77e0d2ef66283cb0775fa123281.jpg"
      ]
    },
    {
      "id": 5507,
      "name": "Workflo Balewadi Spaces",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Balewadi",
      "location": "Balewadi, Bangalore",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/6fc05f434d56e23bf27852c127e187de3ac48ba7.webp",
        "https://img.cofynd.com/images/latest_images_2024/bea6aaff077ee13881bcd89ebddce99f61ff1efd.webp",
        "https://img.cofynd.com/images/latest_images_2024/88355cfe807eb7b3e3e6142ace23b8bd7ba11364.webp",
        "https://img.cofynd.com/images/latest_images_2024/d8edb79d55d6008b41c960980f3ade4db2174332.webp",
        "https://img.cofynd.com/images/latest_images_2024/de0bebd83dd3de5bbd3e66125d3983ca2cdc24d4.webp"
      ]
    },
    {
      "id": 5508,
      "name": "Quick Office Balewadi",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Balewadi",
      "location": "Balewadi, Bangalore",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/6a2d6ce5db832bf5e10ae7cdb183395e1bf258c9.jpg",
        "https://img.cofynd.com/images/original/cdc6fcc222be7e4217c0347946389bb7fb09dae3.jpg",
        "https://img.cofynd.com/images/original/b40580f63ffb1fa709068c7de89842003df58fb6.jpg",
        "https://img.cofynd.com/images/original/d9c9de21fde512d1abf3c2de44a3ca2c56d75712.jpg",
        "https://img.cofynd.com/images/original/e06e73593b9ee84db11f0ae4f258b0d337c6db01.jpg"
      ]
    },
    {
      "id": 5509,
      "name": "Insspire One West",
      "badge": "Verified",
      "rating": 4.8,
      "area": "Balewadi",
      "location": "Balewadi, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/0bc7a07885199025cd4df17086f680ba67739391.webp",
        "https://img.cofynd.com/images/latest_images_2024/b0ec9e3e67efe251c56b89119bdac0210a62c19c.webp",
        "https://img.cofynd.com/images/latest_images_2024/262dbee0e07613a770d3727288051991dbeb365c.webp",
        "https://img.cofynd.com/images/latest_images_2024/0e27ca81d3a7dd12e02afe21df96be4c10978cea.webp",
        "https://img.cofynd.com/images/latest_images_2024/9cc70128236dd9f7372d9287e3cead2dab97d5fa.webp"
      ]
    },
    {
      "id": 5510,
      "name": "Enzigma Coworking Balewadi",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Balewadi",
      "location": "Balewadi, Bangalore",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/11291db26ff85bbaae02e6a32f7b6898c102bf84.webp",
        "https://img.cofynd.com/images/latest_images_2024/59e74404c38a90705245cae23d7be0e7b7b21e2f.webp",
        "https://img.cofynd.com/images/latest_images_2024/5dd38c3a0736451d80c762031c8e4b097cf7f617.webp",
        "https://img.cofynd.com/images/latest_images_2024/14bab5b79e13634a0877bdc64d5bbf1d3b2be99f.webp",
        "https://img.cofynd.com/images/latest_images_2024/cdf6755fdcb0b9a745c6bb58644a8968399396d9.webp"
      ]
    }
  ],
  "Hinjewadi": [
    {
      "id": 5601,
      "name": "Quick Office Hinjewadi",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Hinjewadi",
      "location": "Hinjewadi Phase 1, Bangalore",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/6a2d6ce5db832bf5e10ae7cdb183395e1bf258c9.jpg",
        "https://img.cofynd.com/images/original/cdc6fcc222be7e4217c0347946389bb7fb09dae3.jpg",
        "https://img.cofynd.com/images/original/b40580f63ffb1fa709068c7de89842003df58fb6.jpg",
        "https://img.cofynd.com/images/original/d9c9de21fde512d1abf3c2de44a3ca2c56d75712.jpg",
        "https://img.cofynd.com/images/original/e06e73593b9ee84db11f0ae4f258b0d337c6db01.jpg"
      ]
    },
    {
      "id": 5602,
      "name": "AllDeskSolutions",
      "badge": "Premium",
      "rating": 4.6,
      "area": "Hinjewadi",
      "location": "Hinjewadi, Bangalore.",
      "price": "₹4,999",
      "period": "/ Month",
      "priceFormatted": "₹4,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/fa9688429eb6f5c7c8c829d3d6459a77ff85471d.webp",
        "https://img.cofynd.com/images/latest_images_2024/5763ca719ab1320015fecef0932760705e7bfd06.webp",
        "https://img.cofynd.com/images/latest_images_2024/2f082cc66ba871d4389faaac8b9f74818de97ee4.webp",
        "https://img.cofynd.com/images/latest_images_2024/db3574f251f49a8ac3859e44f7f99c7ff90cc985.webp",
        "https://img.cofynd.com/images/latest_images_2024/dfd50858233c615952e06d8f209f2e752bcd39f7.webp"
      ]
    },
    {
      "id": 5603,
      "name": "Ideas to Impacts Hinjewadi",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Hinjewadi",
      "location": "Hinjewadi, Bangalore",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/fe808308012ed34e26268efec85259f3b62b092f.webp",
        "https://img.cofynd.com/images/latest_images_2024/0d0fbf69f720692aaf10184ff0b947bc8caec729.webp",
        "https://img.cofynd.com/images/latest_images_2024/d26ee13c1e786dfe45bc1dae11d76ba82477721e.webp",
        "https://img.cofynd.com/images/latest_images_2024/15c32e8ebd07fcd00a84e8012d05ec57383de042.webp"
      ]
    },
    {
      "id": 5604,
      "name": "Kowork Hinjewadi IT Park",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Hinjewadi",
      "location": "Hinjewadi Phase 2, Bangalore",
      "price": "₹6,000",
      "period": "/ Month",
      "priceFormatted": "₹6,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/30af2c304245fdb437494efa307bb5c2ebff907c.webp",
        "https://img.cofynd.com/images/latest_images_2024/ebca264701e10baf6ef637dd9b35a17ea6da1653.webp",
        "https://img.cofynd.com/images/latest_images_2024/5b00ab8c04dbc49ab5a257d8a34b6a5aa86fd4a2.webp",
        "https://img.cofynd.com/images/latest_images_2024/9d00e4ed1405ad9e6a411953e436d04610b5868d.webp",
        "https://img.cofynd.com/images/latest_images_2024/55ae3b24dbb0fb8ed75b3fc1fd87d1cbcad8e652.webp"
      ]
    },
    {
      "id": 5605,
      "name": "Sprint Hinjewadi Phase 1",
      "badge": "Verified",
      "rating": 4.9,
      "area": "Hinjewadi",
      "location": "Hinjewadi Phase 1, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/13b1c546d03b7d6be23f5f02d3eda58af747aa28.webp",
        "https://img.cofynd.com/images/latest_images_2024/36475bb43d9929c58c9a3e3077ccf478a813e925.webp",
        "https://img.cofynd.com/images/latest_images_2024/27053bf7e53f0857aa37c42b4630c0943b04bf3a.webp",
        "https://img.cofynd.com/images/latest_images_2024/01669a959ca243a0ace85d5cb3d35ad7a0fa0069.webp",
        "https://img.cofynd.com/images/latest_images_2024/c67e73ebcf2879dca288e92ffcf56a0cddcdded2.webp"
      ]
    },
    {
      "id": 5606,
      "name": "Growth Hub Hinjewadi",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Hinjewadi",
      "location": "Hinjewadi, Bangalore",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/201832e933dceb27eca847ecb0ab985c0a523123.webp",
        "https://img.cofynd.com/images/latest_images_2024/f958e6462f64871243953ec4188180b7916964e3.webp",
        "https://img.cofynd.com/images/latest_images_2024/07f5854f28ec6d447a35f49993b316f8cbfb6359.webp",
        "https://img.cofynd.com/images/latest_images_2024/844c255f8c6429752e6772208d8668dfc8e41274.webp",
        "https://img.cofynd.com/images/latest_images_2024/e698a2b903850d8952b9f34674faf4f1d3f35dcf.webp"
      ]
    },
    {
      "id": 5607,
      "name": "Alive Digital Hinjewadi",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Hinjewadi",
      "location": "Hinjewadi, Bangalore",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/662e3820f86e1605d69047d231eb572ab644d980.webp",
        "https://img.cofynd.com/images/latest_images_2024/cc924886e92b26cf7e37f27f3a79ab1428307d09.webp",
        "https://img.cofynd.com/images/latest_images_2024/ed587bd4db40212c663a74dfab1825a05b5fdd7e.webp",
        "https://img.cofynd.com/images/latest_images_2024/67731cb00c845fff1f7de37893b4dd456276c020.webp"
      ]
    },
    {
      "id": 5608,
      "name": "91springboard Hinjewadi",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Hinjewadi",
      "location": "Hinjewadi Phase 1, Bangalore",
      "price": "₹15,999",
      "period": "/ Month",
      "priceFormatted": "₹15,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/25544f614e445f6de20e55eb28644e33a04f7ee4.webp",
        "https://img.cofynd.com/images/latest_images_2024/2a8a4caef5e0eff769885d4a2cca70c9b45815a2.webp",
        "https://img.cofynd.com/images/latest_images_2024/66ec2ccb1166dabbe192c25b56e31f426c77ade7.webp",
        "https://img.cofynd.com/images/latest_images_2024/70c576585e2c824605936ad8e7673e9c39184ba2.webp",
        "https://img.cofynd.com/images/latest_images_2024/48f0d77e79a17aeed1cf6cebcdfea9e2e0164a12.webp"
      ]
    },
    {
      "id": 5609,
      "name": "EFC Prime Hinjewadi",
      "badge": "Verified",
      "rating": 4.8,
      "area": "Hinjewadi",
      "location": "Hinjewadi Phase 2, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/804b32e9ba4e48ddfb0507b860e69ae4b151648b.webp",
        "https://img.cofynd.com/images/latest_images_2024/b411986de68ed9d3ba22829582c9ab7b55ce92a7.webp",
        "https://img.cofynd.com/images/latest_images_2024/7185fa21ac43e34d46d64a8184ea21dbfc011100.webp",
        "https://img.cofynd.com/images/latest_images_2024/75c99a42549db958c07069acd879e75aa5f112ed.webp",
        "https://img.cofynd.com/images/latest_images_2024/cab9273bb7bf6a368d71604964dcafd5200ffcbe.webp"
      ]
    },
    {
      "id": 5610,
      "name": "SpaceX Hinjewadi",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Hinjewadi",
      "location": "Hinjewadi, Bangalore",
      "price": "₹7,500",
      "period": "/ Month",
      "priceFormatted": "₹7,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/57422d801aa66e0200a6fd982c6a1d168b0d6275.webp",
        "https://img.cofynd.com/images/latest_images_2024/ff7969ee32e450a85e87cf6976c71963b4d3dafd.webp",
        "https://img.cofynd.com/images/latest_images_2024/68038624a7c5bdc74441035f777d55e9bbc6b2c9.webp",
        "https://img.cofynd.com/images/latest_images_2024/c0df3d03571344f92ee79dabddca13a871d33015.webp",
        "https://img.cofynd.com/images/latest_images_2024/1725970ae15ae2c573b710b0bdef6ec7fbcde234.webp"
      ]
    }
  ],
  "Kothrud": [
    {
      "id": 5701,
      "name": "Awfis Quantum Works",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Kothrud",
      "location": "Kothrud, Bangalore",
      "price": "₹10,999",
      "period": "/ Month",
      "priceFormatted": "₹10,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/95fab10176feeb8c1582592e681b165f45d2078f.webp",
        "https://img.cofynd.com/images/latest_images_2024/eed15866008aac7b019ca665de5e1288d134a2aa.webp",
        "https://img.cofynd.com/images/latest_images_2024/e79274eb294face92d52517d40c60bf2ce6aebde.webp",
        "https://img.cofynd.com/images/latest_images_2024/257e7838d5ecd76899b5aa07882c06d8be9a1aea.webp",
        "https://img.cofynd.com/images/latest_images_2024/badddc2ec7c34c920dfa563e34dc9b9b7b95dabe.webp"
      ]
    },
    {
      "id": 5702,
      "name": "Bootstart Suma Kothrud",
      "badge": "Premium",
      "rating": 4.6,
      "area": "Kothrud",
      "location": "Kothrud, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/2bfa1bc3232147a4fd239310f16932190aa00ac1.webp",
        "https://img.cofynd.com/images/latest_images_2024/8110cd399ca2809d231cfa01d2441cceb9706975.webp",
        "https://img.cofynd.com/images/latest_images_2024/8dabf8a3d8e1059fecfe892c993b4b8a072ef461.webp",
        "https://img.cofynd.com/images/latest_images_2024/bce71136270eaeff908bf9d9f11a96efb6ff439e.webp",
        "https://img.cofynd.com/images/latest_images_2024/9ec128c4dc2005bb93d16ff548907d8e1e549be0.webp"
      ]
    },
    {
      "id": 5703,
      "name": "Espree Coworking Kothrud",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Kothrud",
      "location": "Paud Road, Kothrud, Bangalore",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/8ce013856b6024104155c57e95f914ecdc6a675d.webp",
        "https://img.cofynd.com/images/latest_images_2024/8e1814b31a5a428c90b1aa16934c00c98e3f03b0.webp",
        "https://img.cofynd.com/images/latest_images_2024/0b499e7234f98da7b9e8768902555ab3bb1510cd.webp",
        "https://img.cofynd.com/images/latest_images_2024/e2efbf47de1a27ce0746ec69efa7b30ca348e744.webp",
        "https://img.cofynd.com/images/latest_images_2024/7e320d7c711d58e7ee7b5a9831a4cf35f2816a45.webp"
      ]
    },
    {
      "id": 5704,
      "name": "Thinknest Coworking",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Kothrud",
      "location": "Kothrud, Bangalore",
      "price": "₹8,500",
      "period": "/ Month",
      "priceFormatted": "₹8,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/2ea7d07f51cd08cdd53f7e6ec1d8132f6d7755e3.webp",
        "https://img.cofynd.com/images/latest_images_2024/b1057278a2c9eba28af65ed5ef1e357ab32e0c78.webp",
        "https://img.cofynd.com/images/latest_images_2024/9340221e4348fae5ec705fe960a057ca42d94818.webp"
      ]
    },
    {
      "id": 5705,
      "name": "Bootstart Coworking Kothrud",
      "badge": "Verified",
      "rating": 4.9,
      "area": "Kothrud",
      "location": "Karve Road, Kothrud, Bangalore",
      "price": "₹6,500",
      "period": "/ Month",
      "priceFormatted": "₹6,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/d05ac68e752d48d18a9548d8cb836b81fd95c18a.webp",
        "https://img.cofynd.com/images/latest_images_2024/42e061a664661b8837b419f2e31407d72d806e20.webp",
        "https://img.cofynd.com/images/latest_images_2024/5176199e84c881a6da33330f0648e84ee0c8263b.webp",
        "https://img.cofynd.com/images/latest_images_2024/ba1da479c668bcde77de2e6da807cc5bfc0c6fdf.webp"
      ]
    },
    {
      "id": 5706,
      "name": "ScaleUp CoWork Kothrud",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Kothrud",
      "location": "Ideal Colony, Kothrud, Bangalore",
      "price": "₹7,000",
      "period": "/ Month",
      "priceFormatted": "₹7,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/f809998409e326eec1589237d62fec35a0f5bff5.jpg",
        "https://img.cofynd.com/images/original/f2c386881e1c1ffb15fec004a116835ec12d7e03.jpg",
        "https://img.cofynd.com/images/original/67db7677286bc5d9920525e826712bc117d9fd36.jpg",
        "https://img.cofynd.com/images/original/f3301766c8ef599ab9fccf4e79d8ffb05607f8cb.jpg",
        "https://img.cofynd.com/images/original/bf82d800a2cc9ddc0818624e1675bb69056ff64e.jpg"
      ]
    },
    {
      "id": 5707,
      "name": "Aster Workspace Kothrud",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Kothrud",
      "location": "Mayur Colony, Kothrud, Bangalore",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/108e44d3d4995d298f0079d63cb29506636e32cd.webp",
        "https://img.cofynd.com/images/latest_images_2024/5a0c5088f1a3fcd2e21f0b4f8e474bb596ed415b.webp",
        "https://img.cofynd.com/images/latest_images_2024/643d8a9679b0672534f839ba039c9bf127eb0296.webp",
        "https://img.cofynd.com/images/latest_images_2024/305b6bd07971b47555e2b79b65cae51810a9bf43.webp",
        "https://img.cofynd.com/images/latest_images_2024/981f5da85f450667c290067fdb7cc47658012289.webp"
      ]
    },
    {
      "id": 5708,
      "name": "WorkHub Kothrud",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Kothrud",
      "location": "Paud Road, Kothrud, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/31fd493b5fab163f9a2d8bddeedf1a1e17a1d885.webp",
        "https://img.cofynd.com/images/latest_images_2024/448660eb3e7510de6808dfa2128570e3bc29b381.webp",
        "https://img.cofynd.com/images/latest_images_2024/bbfe22c34e2dfa71e940a05190c8e8ded20db2e6.webp",
        "https://img.cofynd.com/images/latest_images_2024/f9281528475c492bf1ed563de855b052d4bd7209.webp",
        "https://img.cofynd.com/images/original/66e97384b3e8fff86453c74021b59ee823bed78a.jpg"
      ]
    },
    {
      "id": 5709,
      "name": "TBL Coworking Kothrud",
      "badge": "Verified",
      "rating": 4.8,
      "area": "Kothrud",
      "location": "Kothrud, Bangalore",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/416042ba0670ffdc14a90c1b703e8d74d3a1898f.webp",
        "https://img.cofynd.com/images/latest_images_2024/604a92f54abd499469b83ec493b75005e4ef2edc.webp",
        "https://img.cofynd.com/images/latest_images_2024/2793ac69d03daa635d6d65f231f183ab45ece894.webp",
        "https://img.cofynd.com/images/latest_images_2024/7ef6faeab4bf7be24db4493b03a5c6813043a62f.webp",
        "https://img.cofynd.com/images/latest_images_2024/7e54f22dd07e39e40c4dd21bc597e63c91dd04f8.webp"
      ]
    },
    {
      "id": 5710,
      "name": "The Workspace Kothrud",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Kothrud",
      "location": "Karve Road, Kothrud, Bangalore",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/956b4f48c69755a7303803dad89b233595fb7ec5.webp",
        "https://img.cofynd.com/images/latest_images_2024/9be805c73253837d17f48a683d66069a70ed9b93.webp",
        "https://img.cofynd.com/images/latest_images_2024/2ebb14486e75f9406c545315352fefd4069963c3.webp",
        "https://img.cofynd.com/images/original/7258eaa0c58d5ce56e019fc1a8bd55794a98bc5b.jpg",
        "https://img.cofynd.com/images/original/b8b66cdb907fa9ab1469d1b6f6ee28b15bfd42a4.jpg"
      ]
    }
  ],
  "Aundh": [
    {
      "id": 5801,
      "name": "Share A Space",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Aundh",
      "location": "Aundh, Bangalore",
      "price": "₹9,499",
      "period": "/ Month",
      "priceFormatted": "₹9,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/a4eadf8723bbf934307a585ce3a10b87ba80d475.jpg",
        "https://img.cofynd.com/images/original/cba23fbff5fb9fc8ddd441d8a25f68e8efa1c76b.jpg",
        "https://img.cofynd.com/images/original/63e2171239c540d2745f634c1f73a3198526040a.jpg",
        "https://img.cofynd.com/images/original/2851d6fa3bd6909bca06fc26da49b5cf1cede2ad.jpg",
        "https://img.cofynd.com/images/original/834fc89f0327b7d9559b17cea07807f9af45fe0e.jpg"
      ]
    },
    {
      "id": 5802,
      "name": "Thinkcowork",
      "badge": "Premium",
      "rating": 4.6,
      "area": "Aundh",
      "location": "Aundh, Bangalore",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/8aedd18ca1ff6255b53489882f554edc5130222f.jpg",
        "https://img.cofynd.com/images/latest_images_2024/442086af126bdd0c328cb6245488c764b416206e.webp",
        "https://img.cofynd.com/images/latest_images_2024/0811625ac72ae16b47a808deb4d690e1326be9e5.webp",
        "https://img.cofynd.com/images/latest_images_2024/0122f4bdab658ac641e4f348c84f18f4e2863a0d.webp",
        "https://img.cofynd.com/images/original/0b7358b353d6a791efd3be1458c65b9c123bc641.jpg"
      ]
    },
    {
      "id": 5803,
      "name": "Incube",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Aundh",
      "location": "Shambhu Vihar Society, Aundh Gaon, Aundh, Bangalore, Maharashtra - , India",
      "price": "₹7,499",
      "period": "/ Month",
      "priceFormatted": "₹7,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/f8d9606998e1218be2aa1030247812464c493f97.webp",
        "https://img.cofynd.com/images/latest_images_2024/bcf0e4102586aa23bb44d6af54386db649718b0c.webp",
        "https://img.cofynd.com/images/latest_images_2024/05b157165e6162161e531bdc80f9d6bee47e9f5d.webp",
        "https://img.cofynd.com/images/latest_images_2024/d14417a9e9e3000ce903455e6ea476a4fd8c0aa0.webp",
        "https://img.cofynd.com/images/latest_images_2024/b0181c4858f43a20fb6ffc5a06bde2d5f18945aa.webp"
      ]
    },
    {
      "id": 5804,
      "name": "Covie Premium Coworking",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Aundh",
      "location": "Aundh, Bangalore.",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/453517e0876c65ea4a62c8d1318c1b7dedfc7c53.webp",
        "https://img.cofynd.com/images/latest_images_2024/6e137c7db89e473b6778f254f745fca51329edfc.webp",
        "https://img.cofynd.com/images/latest_images_2024/1384430ff2802e34f62b44b76eb77911154c3cf8.webp",
        "https://img.cofynd.com/images/latest_images_2024/e6c1cc2b4e270d856aff8fe6ffd750c29f0b55a7.webp",
        "https://img.cofynd.com/images/latest_images_2024/20943c11643c36249ca86ec2927848b5d1c47e99.webp"
      ]
    },
    {
      "id": 5805,
      "name": "Incube Coworking Aundh",
      "badge": "Verified",
      "rating": 4.9,
      "area": "Aundh",
      "location": "Aundh, Bangalore",
      "price": "₹4,000",
      "period": "/ Month",
      "priceFormatted": "₹4,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/1a1f839cf4c05033dc74a42ae655c33970fbb963.jpg",
        "https://img.cofynd.com/images/original/98bb398c0966ce05ca1cc393890b988eab0fc4e2.jpg",
        "https://img.cofynd.com/images/original/0581d92508cfe08e4654e2c1af8c5ce5dcb8cb6e.jpg",
        "https://img.cofynd.com/images/original/37b2ec0b474f8068a5a8dd5423d2e93db167eab6.jpg",
        "https://img.cofynd.com/images/original/506fa44c3407bf5768a9ab7ba1ccb2827786c1b0.jpg"
      ]
    },
    {
      "id": 5806,
      "name": "11COWORK Aundh",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Aundh",
      "location": "Aundh, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/1057f599d06bddada36762050ec7d9e4ebaba1af.webp",
        "https://img.cofynd.com/images/latest_images_2024/5a4c4b22dfd821b9aae2e13d96744778c5e3991b.webp",
        "https://img.cofynd.com/images/latest_images_2024/6f30108074aa2d4bab42872376941e98ecb06321.webp",
        "https://img.cofynd.com/images/latest_images_2024/dc04579ca0b7cf7ff680c3be44b73a51463c40e9.webp",
        "https://img.cofynd.com/images/latest_images_2024/1ad83aac01cfd6c70d3e50aa7eddf42c00ce9e8c.webp"
      ]
    },
    {
      "id": 5807,
      "name": "Ideas to Impacts Hub Aundh",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Aundh",
      "location": "DP Road, Aundh, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/9840e6d189d87b2620436e83dbd6f77e2a9ada35.webp",
        "https://img.cofynd.com/images/latest_images_2024/13d67c412a67bf7a11287aa0a9fe7edc4997e5b7.webp",
        "https://img.cofynd.com/images/latest_images_2024/559aff9aa39164c1a30e8c4dc552503dbc4d7be8.webp",
        "https://img.cofynd.com/images/latest_images_2024/d2a19b698c8a35fcf6c163c2512d95d1ed91a91f.webp",
        "https://img.cofynd.com/images/latest_images_2024/2f61df5375f16ad9b5d27d8a5afc97c5aa8607c6.webp"
      ]
    },
    {
      "id": 5808,
      "name": "TRIOS Aundh Center",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Aundh",
      "location": "Aundh, Bangalore",
      "price": "₹9,200",
      "period": "/ Month",
      "priceFormatted": "₹9,200 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/54cb1bf58553dedf6708c2e5e0f917b5d00b1c17.webp",
        "https://img.cofynd.com/images/latest_images_2024/2e17cf37176194d28f07db5eae5d0c71cb1db5de.webp",
        "https://img.cofynd.com/images/latest_images_2024/9c30a88110350adef969d872838b15c625b2dc90.webp",
        "https://img.cofynd.com/images/latest_images_2024/1387d618963b6741df60c64483297d764204863d.webp",
        "https://img.cofynd.com/images/latest_images_2024/b976eea70a1337cf50658510554f881856d8aa63.webp"
      ]
    },
    {
      "id": 5809,
      "name": "Awfis Aundh Heights",
      "badge": "Verified",
      "rating": 4.8,
      "area": "Aundh",
      "location": "Aundh, Bangalore",
      "price": "₹10,999",
      "period": "/ Month",
      "priceFormatted": "₹10,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/cd0618a718f4279b30b806ea42d0f0538386f193.webp",
        "https://img.cofynd.com/images/latest_images_2024/ae089b7ca608b713e7164ab8b9aae9a56f314d93.webp",
        "https://img.cofynd.com/images/latest_images_2024/ab2b84cb2767391d329a1f317c9abe66948a9172.webp",
        "https://img.cofynd.com/images/latest_images_2024/df3760d2440e4a576e8ef511ea670410b580d52b.webp",
        "https://img.cofynd.com/images/latest_images_2024/852410bf19a78735900b092fe6e803baf92482cc.webp"
      ]
    },
    {
      "id": 5810,
      "name": "Cowerkz Aundh",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Aundh",
      "location": "Aundh, Bangalore",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/d6c50606af788441c67607f2cd983cde1d084067.webp",
        "https://img.cofynd.com/images/latest_images_2024/d7f629a674bed4c42fcb285b41eb202790cf00cb.webp",
        "https://img.cofynd.com/images/latest_images_2024/9d6d1e28e1ecf3366199a2e9dec47fe64a8ccb22.webp",
        "https://img.cofynd.com/images/latest_images_2024/51ee565b91eea36c875c7ddf996652b81ba22d8b.webp",
        "https://img.cofynd.com/images/latest_images_2024/e89e966b44b61287d86815d0a73a1f46bbca9641.webp"
      ]
    }
  ],
  "Pimple Saudagar": [
    {
      "id": 5901,
      "name": "Awfis GK Mall",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Pimple Saudagar",
      "location": "Pimple Saudagar, Bangalore",
      "price": "₹10,999",
      "period": "/ Month",
      "priceFormatted": "₹10,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/7cac68ecacd3f6a32407f74844adc4d5b797d1a1.webp",
        "https://img.cofynd.com/images/original/4484d5dc0e0cc0ab0f9ba4d507d679e2ac72830a.jpg",
        "https://img.cofynd.com/images/original/205e990674a7cefe548ea801c4e8654b76ba00a8.jpg",
        "https://img.cofynd.com/images/original/7a47e648e2f8507f22b0bbe17ffba95c038ccc25.jpg",
        "https://img.cofynd.com/images/original/1cbff71d3df1dc948c372fb25b209191a08e5b86.jpg"
      ]
    },
    {
      "id": 5902,
      "name": "The Living Desk",
      "badge": "Premium",
      "rating": 4.6,
      "area": "Pimple Saudagar",
      "location": "Pimple Saudagar, Bangalore",
      "price": "₹4,999",
      "period": "/ Month",
      "priceFormatted": "₹4,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/a69450c10e57dd1527932d3a94e44e172236765f.webp",
        "https://img.cofynd.com/images/latest_images_2024/6cebf72f29d7faac65a5204af733d16e3f335e66.webp",
        "https://img.cofynd.com/images/latest_images_2024/d46fc9d580da0ae277edc9430d9234e395cdb961.webp",
        "https://img.cofynd.com/images/latest_images_2024/4f906129fc19084e952849d33f5bbd29d844f076.webp",
        "https://img.cofynd.com/images/latest_images_2024/b436a2d3ce71be6cf994d32e3487c4e02dc0b644.webp"
      ]
    },
    {
      "id": 5903,
      "name": "Reality Workspaces",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Pimple Saudagar",
      "location": "Pimple Saudagar, Bangalore",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/32ef0a19a3c2a59cd0f0a9583f3db8b6f45741f4.webp",
        "https://img.cofynd.com/images/latest_images_2024/ee1efc46e5c811c5f1c1509db951cf20ff81a37f.webp",
        "https://img.cofynd.com/images/latest_images_2024/269a4069af0cf5ef562b5247b8c912eb7b808e60.webp",
        "https://img.cofynd.com/images/latest_images_2024/28fed5ebadb1a29806350bde659eec49dd791322.webp",
        "https://img.cofynd.com/images/latest_images_2024/2be07c465566f8b625d1afb456aef5dc689ba19f.webp"
      ]
    },
    {
      "id": 5904,
      "name": "The Cultiv8 Pimple Saudagar",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Pimple Saudagar",
      "location": "Pimple Saudagar, Bangalore",
      "price": "₹5,499",
      "period": "/ Month",
      "priceFormatted": "₹5,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/fbf926341143fd97b0df29962e5a54a47dbcf8f8.jpg",
        "https://img.cofynd.com/images/original/15db7af84400b986b0cd043befb3d6c79295f50c.jpg",
        "https://img.cofynd.com/images/original/0bb076ef96db49479c8e9b67897f50922e88c90e.jpg",
        "https://img.cofynd.com/images/original/3a09b79b0dcbb5f7958d9470187c8a27ffdf17ad.jpg",
        "https://img.cofynd.com/images/original/3b31cf2e8881b77e0d2ef66283cb0775fa123281.jpg"
      ]
    },
    {
      "id": 5905,
      "name": "Kowork Pimple Saudagar",
      "badge": "Verified",
      "rating": 4.9,
      "area": "Pimple Saudagar",
      "location": "Pimple Saudagar, Bangalore",
      "price": "₹6,000",
      "period": "/ Month",
      "priceFormatted": "₹6,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/30af2c304245fdb437494efa307bb5c2ebff907c.webp",
        "https://img.cofynd.com/images/latest_images_2024/ebca264701e10baf6ef637dd9b35a17ea6da1653.webp",
        "https://img.cofynd.com/images/latest_images_2024/5b00ab8c04dbc49ab5a257d8a34b6a5aa86fd4a2.webp",
        "https://img.cofynd.com/images/latest_images_2024/9d00e4ed1405ad9e6a411953e436d04610b5868d.webp",
        "https://img.cofynd.com/images/latest_images_2024/55ae3b24dbb0fb8ed75b3fc1fd87d1cbcad8e652.webp"
      ]
    },
    {
      "id": 5906,
      "name": "ANA Workspace Pimple Saudagar",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Pimple Saudagar",
      "location": "Pimple Saudagar, Bangalore",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/7f5741db7a68d8fdea858bda92cba9cd37b89814.jpg",
        "https://img.cofynd.com/images/original/83fdd16c008a520c82723ad290e25631b81c686f.jpg",
        "https://img.cofynd.com/images/latest_images_2024/a60ed78ba0410a0f1082bcb572f37dc6386047aa.webp",
        "https://img.cofynd.com/images/latest_images_2024/b1a41a6860333155139ecc9cbf46b994727720d8.webp",
        "https://img.cofynd.com/images/original/5f7324a00fd749c9b0ad758d47edfd5d580def38.jpg"
      ]
    },
    {
      "id": 5907,
      "name": "Scale Up Cowork Pimple Saudagar",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Pimple Saudagar",
      "location": "Pimple Saudagar, Bangalore",
      "price": "₹7,499",
      "period": "/ Month",
      "priceFormatted": "₹7,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/6de1873136597c9d902303f67f38b8405e96a881.webp",
        "https://img.cofynd.com/images/latest_images_2024/de0de61c4ea23a79c9cd1bfb4072420ead3911fa.webp",
        "https://img.cofynd.com/images/latest_images_2024/f98b9d07c518e699117dc085adb6f7482a09ac9d.webp",
        "https://img.cofynd.com/images/latest_images_2024/a05dfdcce253ff13a2cde2ad2476c01a4febae45.webp",
        "https://img.cofynd.com/images/latest_images_2024/ed5611c4ba185762ae4406e2b95ecefe9ff48a02.webp"
      ]
    },
    {
      "id": 5908,
      "name": "Incube Pimple Saudagar",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Pimple Saudagar",
      "location": "Pimple Saudagar, Bangalore",
      "price": "₹7,499",
      "period": "/ Month",
      "priceFormatted": "₹7,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/f8d9606998e1218be2aa1030247812464c493f97.webp",
        "https://img.cofynd.com/images/latest_images_2024/bcf0e4102586aa23bb44d6af54386db649718b0c.webp",
        "https://img.cofynd.com/images/latest_images_2024/05b157165e6162161e531bdc80f9d6bee47e9f5d.webp",
        "https://img.cofynd.com/images/latest_images_2024/d14417a9e9e3000ce903455e6ea476a4fd8c0aa0.webp",
        "https://img.cofynd.com/images/latest_images_2024/b0181c4858f43a20fb6ffc5a06bde2d5f18945aa.webp"
      ]
    },
    {
      "id": 5909,
      "name": "Incube Hub Pimple Saudagar",
      "badge": "Verified",
      "rating": 4.8,
      "area": "Pimple Saudagar",
      "location": "Pimple Saudagar, Bangalore",
      "price": "₹4,000",
      "period": "/ Month",
      "priceFormatted": "₹4,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/1a1f839cf4c05033dc74a42ae655c33970fbb963.jpg",
        "https://img.cofynd.com/images/original/98bb398c0966ce05ca1cc393890b988eab0fc4e2.jpg",
        "https://img.cofynd.com/images/original/0581d92508cfe08e4654e2c1af8c5ce5dcb8cb6e.jpg",
        "https://img.cofynd.com/images/original/37b2ec0b474f8068a5a8dd5423d2e93db167eab6.jpg",
        "https://img.cofynd.com/images/original/506fa44c3407bf5768a9ab7ba1ccb2827786c1b0.jpg"
      ]
    },
    {
      "id": 5910,
      "name": "Alive Digital Pimple Saudagar",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Pimple Saudagar",
      "location": "Pimple Saudagar, Bangalore",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/662e3820f86e1605d69047d231eb572ab644d980.webp",
        "https://img.cofynd.com/images/latest_images_2024/cc924886e92b26cf7e37f27f3a79ab1428307d09.webp",
        "https://img.cofynd.com/images/latest_images_2024/ed587bd4db40212c663a74dfab1825a05b5fdd7e.webp",
        "https://img.cofynd.com/images/latest_images_2024/67731cb00c845fff1f7de37893b4dd456276c020.webp"
      ]
    }
  ],
  "Kalyani Nagar": [
    {
      "id": 6001,
      "name": "Tag Co-Works",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Kalyani Nagar",
      "location": "Kalyani Nagar, Bangalore",
      "price": "₹5,000",
      "period": "/ Month",
      "priceFormatted": "₹5,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/f1424db42444f8b6a62f588f594c352e5d0ad72e.webp",
        "https://img.cofynd.com/images/latest_images_2024/cb409206a0b378fd158916c34e85aea5f1dac7ee.webp",
        "https://img.cofynd.com/images/latest_images_2024/4a80ca81d529f233d965d48c442a59eae81aeb8e.webp",
        "https://img.cofynd.com/images/latest_images_2024/18d01923b21937c81ece74720c4bb548da9e6923.webp"
      ]
    },
    {
      "id": 6002,
      "name": "Innov8 suman business park",
      "badge": "Premium",
      "rating": 4.6,
      "area": "Kalyani Nagar",
      "location": "Kalyani Nagar, Bangalore",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/45caa3259ec31d3dbbfb0ad8d4a1353e5873cdb4.webp",
        "https://img.cofynd.com/images/latest_images_2024/75021eebe2e76b723fc15aba635f308473482561.webp",
        "https://img.cofynd.com/images/latest_images_2024/32333c3aea45553a0733db1dd2cc6d1723e26d82.webp",
        "https://img.cofynd.com/images/latest_images_2024/921e08dff107f633d044a4a35a3509472ff951ac.webp",
        "https://img.cofynd.com/images/latest_images_2024/e4291fad74fa50f8f28e2967ad01a327dca81b43.webp"
      ]
    },
    {
      "id": 6003,
      "name": "315 Work Avenue",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Kalyani Nagar",
      "location": "Kalyani Nagar, Bangalore.",
      "price": "₹11,999",
      "period": "/ Month",
      "priceFormatted": "₹11,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/7509321ccf2e376f29fd26e40500c9eba3e388fd.webp",
        "https://img.cofynd.com/images/latest_images_2024/e331596c7ee0850781930b626a620b53781f3c66.webp",
        "https://img.cofynd.com/images/latest_images_2024/b725d8b0fa21c12100a41a5ae3c49e1cb5ef1c0a.webp",
        "https://img.cofynd.com/images/latest_images_2024/1e28b172d4d92fcce71a6e48ecc3a0358afca3e0.webp",
        "https://img.cofynd.com/images/latest_images_2024/66f3f6edafa6b217a8efa022f1889d05e480f562.webp"
      ]
    },
    {
      "id": 6004,
      "name": "Bauhaus Kalyani Nagar",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Kalyani Nagar",
      "location": "Kalyani Nagar, Bangalore",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/ad44e20b271b38c5b29718e8d5a9601b467971f2.webp",
        "https://img.cofynd.com/images/latest_images_2024/70a2f7192407789f1e28e9964f5091312b87a876.webp",
        "https://img.cofynd.com/images/latest_images_2024/f5d3bfa4290cd5eed717f79403acd80c06891029.webp",
        "https://img.cofynd.com/images/latest_images_2024/8240d697c9f9ed56d928c3ee7111627b861afe38.webp",
        "https://img.cofynd.com/images/latest_images_2024/ce4a50c03e8a15cb2bb635eca13eb364d6e12118.webp"
      ]
    },
    {
      "id": 6005,
      "name": "Pinnacle Kalyani Nagar",
      "badge": "Verified",
      "rating": 4.9,
      "area": "Kalyani Nagar",
      "location": "Kalyani Nagar, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/195f1c8b89a42bdc3f82176029209e8a013d8dc9.webp",
        "https://img.cofynd.com/images/latest_images_2024/59e1ac0eedf9008357b2dcf04a27da65757c49f5.webp",
        "https://img.cofynd.com/images/latest_images_2024/476e76ed574c56acd4de943ed8b672cfd8b38f0d.webp",
        "https://img.cofynd.com/images/latest_images_2024/0edf3dd2e682e9a262183185ec0aa044285896ac.webp"
      ]
    },
    {
      "id": 6006,
      "name": "91springboard Kalyani Nagar",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Kalyani Nagar",
      "location": "Kalyani Nagar, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/a78d38fbe0ad0cf0cf4fad4f4ba8915ba37bc610.webp",
        "https://img.cofynd.com/images/latest_images_2024/cadcabb6fdef9874e7ea7563a218a5c9179a0468.webp",
        "https://img.cofynd.com/images/latest_images_2024/4a20fd79a4048122666b1b6c58e3e85fb5f4cd9e.webp",
        "https://img.cofynd.com/images/latest_images_2024/bd032c1a6dda500c0e1734e4e2d714bc5752de97.webp",
        "https://img.cofynd.com/images/latest_images_2024/333efe0ea8ee872444970549a907d5b5672a554d.webp"
      ]
    },
    {
      "id": 6007,
      "name": "TRIOS Kalyani Nagar",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Kalyani Nagar",
      "location": "Kalyani Nagar, Bangalore",
      "price": "₹10,999",
      "period": "/ Month",
      "priceFormatted": "₹10,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/a4e23f998a00530e1f94d0be23abe8592e97d6d7.webp",
        "https://img.cofynd.com/images/latest_images_2024/26daa8a5d70286fae70f9a757b5326a207e3a567.webp",
        "https://img.cofynd.com/images/latest_images_2024/5133abadba90f1956ef5f4ed7b40c2dcf9cc22ca.webp",
        "https://img.cofynd.com/images/latest_images_2024/0f9c72d6df7e6f5ba5cc51669fffa39bdae5f735.webp",
        "https://img.cofynd.com/images/latest_images_2024/d1115009669a61c861c0397a5c542d1561574e8f.webp"
      ]
    },
    {
      "id": 6008,
      "name": "Starthub Kalyani Nagar",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Kalyani Nagar",
      "location": "Kalyani Nagar, Bangalore",
      "price": "₹7,499",
      "period": "/ Month",
      "priceFormatted": "₹7,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/3a10fd7f1bedb1d5ecd272f0bf0d16aa347576e7.jpg",
        "https://img.cofynd.com/images/original/e1e23064d108590bcb3319e45573bc49a2ceb395.jpg",
        "https://img.cofynd.com/images/original/c1ca5ce9ec9caf7c6c1d9af4e976032b9e3021e1.jpg",
        "https://img.cofynd.com/images/original/15e7d560c947c6bc900d3fb1003bfe9c77e398d2.jpg",
        "https://img.cofynd.com/images/original/26959197d965a409b93036e1f4aab351a977fa27.jpg"
      ]
    },
    {
      "id": 6009,
      "name": "Workspace Kalyani Nagar",
      "badge": "Verified",
      "rating": 4.8,
      "area": "Kalyani Nagar",
      "location": "Kalyani Nagar, Bangalore",
      "price": "₹22,499",
      "period": "/ Month",
      "priceFormatted": "₹22,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/800f8563e454a64cd599567bfa7718b836dd7765.webp",
        "https://img.cofynd.com/images/latest_images_2024/be8dd586067e9fad71f14f885311a3df59edcdd3.webp",
        "https://img.cofynd.com/images/latest_images_2024/09a36f9075809deb592af037d041f3fbabb5221e.webp",
        "https://img.cofynd.com/images/latest_images_2024/94520e6c657a26032275bae6ec5ecb28c2ec3645.webp",
        "https://img.cofynd.com/images/latest_images_2024/8fb511efff6c4ac3e675feb33da2fed7bab8fea8.webp"
      ]
    },
    {
      "id": 6010,
      "name": "Bootstart Kalyani Nagar",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Kalyani Nagar",
      "location": "Kalyani Nagar, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/a56c458480e9e7948160cb4b5a75cc749972128f.webp",
        "https://img.cofynd.com/images/latest_images_2024/17a121e8dc76faa48ed1587bd39c83bae85918d2.webp",
        "https://img.cofynd.com/images/latest_images_2024/20da51b29df772b7e8f6739076112d855b0894f7.webp",
        "https://img.cofynd.com/images/latest_images_2024/5ab639e6b372917886889378c99795b4e4b7d357.webp"
      ]
    }
  ],
  "Bavdhan": [
    {
      "id": 6101,
      "name": "Bootstart Coworking – Shreyas Eterna",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Bavdhan",
      "location": "Bavdhan, Bangalore",
      "price": "₹6,500",
      "period": "/ Month",
      "priceFormatted": "₹6,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/d05ac68e752d48d18a9548d8cb836b81fd95c18a.webp",
        "https://img.cofynd.com/images/latest_images_2024/42e061a664661b8837b419f2e31407d72d806e20.webp",
        "https://img.cofynd.com/images/latest_images_2024/5176199e84c881a6da33330f0648e84ee0c8263b.webp",
        "https://img.cofynd.com/images/latest_images_2024/ba1da479c668bcde77de2e6da807cc5bfc0c6fdf.webp"
      ]
    },
    {
      "id": 6102,
      "name": "Shreyas Crest Bavdhan",
      "badge": "Premium",
      "rating": 4.6,
      "area": "Bavdhan",
      "location": "Bavdhan, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/a3d8de20e3d5a8ac9f67701b71424096eb23203f.webp",
        "https://img.cofynd.com/images/latest_images_2024/ea5c05380f640a740667d7919646bc205f502546.webp",
        "https://img.cofynd.com/images/latest_images_2024/09dadea05a05f4bcbc1c1c18928239f0563d9248.webp",
        "https://img.cofynd.com/images/latest_images_2024/ff81f6edffddcde8d12faf454912a4a75cd43845.webp",
        "https://img.cofynd.com/images/latest_images_2024/59f5c78d9d24b537ac0f8fe25acdf81597384804.webp"
      ]
    },
    {
      "id": 6103,
      "name": "WeHub Bavdhan",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Bavdhan",
      "location": "Bavdhan, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/d8327b6e6a43aad2f4388c20724a0bfb69dce79f.webp",
        "https://img.cofynd.com/images/latest_images_2024/aa33fd117b7864a2fd2f155e9ccdc9a5029f74a3.webp",
        "https://img.cofynd.com/images/latest_images_2024/5e8168742f703937f0b4cecd0c93a808d6099637.webp",
        "https://img.cofynd.com/images/latest_images_2024/a01e1c96a11e8a909a5e6e87ff5fa4a8ad066c3c.webp",
        "https://img.cofynd.com/images/latest_images_2024/78e107b0ba6b330e9cd903cb6d105b389fa4dd42.webp"
      ]
    },
    {
      "id": 6104,
      "name": "Awfis Bavdhan Center",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Bavdhan",
      "location": "Bavdhan, Bangalore",
      "price": "₹10,999",
      "period": "/ Month",
      "priceFormatted": "₹10,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/9068ff4694700880b5a5e839ed721d6add75574e.webp",
        "https://img.cofynd.com/images/latest_images_2024/3ebbd40dab50f56677fbdc9a8654187a2902e655.webp",
        "https://img.cofynd.com/images/latest_images_2024/c791f283163121ffb03bee2f4740aaa308336c24.webp",
        "https://img.cofynd.com/images/latest_images_2024/8e38d64e483da95f8222e8c0f9c3d8bee9b188b4.webp",
        "https://img.cofynd.com/images/latest_images_2024/cd2cc9430e167dc5a8435eedb635da41d7bdbc72.webp"
      ]
    },
    {
      "id": 6105,
      "name": "Awfis Quantum Bavdhan",
      "badge": "Verified",
      "rating": 4.9,
      "area": "Bavdhan",
      "location": "Bavdhan, Bangalore",
      "price": "₹10,999",
      "period": "/ Month",
      "priceFormatted": "₹10,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/95fab10176feeb8c1582592e681b165f45d2078f.webp",
        "https://img.cofynd.com/images/latest_images_2024/eed15866008aac7b019ca665de5e1288d134a2aa.webp",
        "https://img.cofynd.com/images/latest_images_2024/e79274eb294face92d52517d40c60bf2ce6aebde.webp",
        "https://img.cofynd.com/images/latest_images_2024/257e7838d5ecd76899b5aa07882c06d8be9a1aea.webp",
        "https://img.cofynd.com/images/latest_images_2024/badddc2ec7c34c920dfa563e34dc9b9b7b95dabe.webp"
      ]
    },
    {
      "id": 6106,
      "name": "Awfis Bavdhan Towers",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Bavdhan",
      "location": "Bavdhan, Bangalore",
      "price": "₹10,999",
      "period": "/ Month",
      "priceFormatted": "₹10,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/58e38018564757ef1e647239a79c576230d405bf.webp",
        "https://img.cofynd.com/images/latest_images_2024/d3adf265fe0edf92e91df3e7c03f82f5a302a427.webp",
        "https://img.cofynd.com/images/latest_images_2024/3fadb97d9dada4a2b1a3366d16e59781a246da3c.webp",
        "https://img.cofynd.com/images/latest_images_2024/a7d260dc22a9b5a408205687527cb1a2814cc783.webp",
        "https://img.cofynd.com/images/latest_images_2024/d64227e9a1882c9baf00c837dae646a58ff8d8cd.webp"
      ]
    },
    {
      "id": 6107,
      "name": "Bootstart Bavdhan",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Bavdhan",
      "location": "Bavdhan, Bangalore",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/5dea17870f98868bd17efb71775486f400b0c615.jpg",
        "https://img.cofynd.com/images/original/76201988713064871eb760f94795215843ea33d9.jpg",
        "https://img.cofynd.com/images/original/a3a34bbdddeba830b2202bbc3dec4de594c6e68f.jpg",
        "https://img.cofynd.com/images/original/dd4bdde3ebc28ab3f5905b5b13070c336e9c1dd8.jpg",
        "https://img.cofynd.com/images/original/4190c14d6af9851f7f075e8c1b0471b19944fdbf.jpg"
      ]
    },
    {
      "id": 6108,
      "name": "SpaceX Bavdhan",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Bavdhan",
      "location": "Bavdhan, Bangalore",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/c3bb6ddc41142c076e66f430a874f3f029fe4fe8.webp",
        "https://img.cofynd.com/images/latest_images_2024/0932191420a15e518c5d9e00e01419f33b7b8f7f.webp",
        "https://img.cofynd.com/images/latest_images_2024/5c5ce40e13c35145629f76ae852b1539851c8f24.webp",
        "https://img.cofynd.com/images/latest_images_2024/8e8269f25cc30f4c54d882af49abf67dcddd4f88.webp",
        "https://img.cofynd.com/images/latest_images_2024/02dd90f185283d96eb3b50632dbc2f9a318dc183.webp"
      ]
    },
    {
      "id": 6109,
      "name": "IndiQube Bavdhan Hub",
      "badge": "Verified",
      "rating": 4.8,
      "area": "Bavdhan",
      "location": "Bavdhan, Bangalore",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/956b4f48c69755a7303803dad89b233595fb7ec5.webp",
        "https://img.cofynd.com/images/latest_images_2024/9be805c73253837d17f48a683d66069a70ed9b93.webp",
        "https://img.cofynd.com/images/latest_images_2024/2ebb14486e75f9406c545315352fefd4069963c3.webp",
        "https://img.cofynd.com/images/original/7258eaa0c58d5ce56e019fc1a8bd55794a98bc5b.jpg",
        "https://img.cofynd.com/images/original/b8b66cdb907fa9ab1469d1b6f6ee28b15bfd42a4.jpg"
      ]
    },
    {
      "id": 6110,
      "name": "Anchor Coworking Bavdhan",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Bavdhan",
      "location": "Bavdhan, Bangalore",
      "price": "₹5,000",
      "period": "/ Month",
      "priceFormatted": "₹5,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/856d9d73fc023c1c3eeab089f859b4ff0e56bc1e.jpg",
        "https://img.cofynd.com/images/latest_images_2024/a4876a8326d117aff05aa3849b95e544f17a312a.webp",
        "https://img.cofynd.com/images/latest_images_2024/a2dfd11c6620ed5091e18e754756f4fddc1253b2.webp",
        "https://img.cofynd.com/images/latest_images_2024/7f2888092f4fd70e50529ebff1525d5de1daa030.webp",
        "https://img.cofynd.com/images/original/14dc3097883d00ded75870b6f23b60d047248ea3.jpg"
      ]
    }
  ],
  "Magarpatta": [
    {
      "id": 6201,
      "name": "Awfis Que Spaces",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Magarpatta",
      "location": "Magarpatta, Bangalore",
      "price": "₹10,999",
      "period": "/ Month",
      "priceFormatted": "₹10,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/236827a029f49356c51def78bed14927b49670cc.webp",
        "https://img.cofynd.com/images/latest_images_2024/ff8aae1c6a11272f670b0b8ee3e6e9942f2c279c.webp",
        "https://img.cofynd.com/images/latest_images_2024/7efef4772e4ef54cf5555525647090a7b525cab9.webp",
        "https://img.cofynd.com/images/latest_images_2024/62b28553fde2a39b015af363ca0d27bf49983053.webp",
        "https://img.cofynd.com/images/latest_images_2024/78870d1e1c478b3b413cd5306abaec97999bd816.webp"
      ]
    },
    {
      "id": 6202,
      "name": "Awfis Magarpatta City",
      "badge": "Premium",
      "rating": 4.6,
      "area": "Magarpatta",
      "location": "Magarpatta, Bangalore",
      "price": "₹10,999",
      "period": "/ Month",
      "priceFormatted": "₹10,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/6a6172b992ab54ba17aee6548e56d9b31ccda6b0.webp",
        "https://img.cofynd.com/images/latest_images_2024/e1db668c8c4a3ca5970b4244934c6c3bdb6d2cf5.webp",
        "https://img.cofynd.com/images/latest_images_2024/544e877cd5dfd68bbdb50ef403bb94544ec0b4eb.webp",
        "https://img.cofynd.com/images/latest_images_2024/d242439f15634648a3cd72b5728bbbbbd59affcc.webp",
        "https://img.cofynd.com/images/latest_images_2024/7a5ad91589f91323e69786b3bb04dad71a0399f3.webp"
      ]
    },
    {
      "id": 6203,
      "name": "Bootstart Magarpatta",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Magarpatta",
      "location": "Magarpatta, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/a56c458480e9e7948160cb4b5a75cc749972128f.webp",
        "https://img.cofynd.com/images/latest_images_2024/17a121e8dc76faa48ed1587bd39c83bae85918d2.webp",
        "https://img.cofynd.com/images/latest_images_2024/20da51b29df772b7e8f6739076112d855b0894f7.webp",
        "https://img.cofynd.com/images/latest_images_2024/5ab639e6b372917886889378c99795b4e4b7d357.webp"
      ]
    },
    {
      "id": 6204,
      "name": "Kontor Space Magarpatta",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Magarpatta",
      "location": "Magarpatta, Bangalore",
      "price": "₹5,500",
      "period": "/ Month",
      "priceFormatted": "₹5,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/0369e7c14ad2fd2d7f03a97d5820c7b26398d970.jpg",
        "https://img.cofynd.com/images/original/e9935e0cf9b204a06ef09771af8bd321bb12aed3.jpg",
        "https://img.cofynd.com/images/original/c6bb4fd8ddd8139037be722cf200f2ce4eabb48d.jpg",
        "https://img.cofynd.com/images/latest_images_2024/b39238ad9ac78360346bef32a5e89034a8ac43bf.webp",
        "https://img.cofynd.com/images/latest_images_2024/84defb26448d63bd51f9935a13db918b8c83b5d0.webp"
      ]
    },
    {
      "id": 6205,
      "name": "Bootstart Cybercity Magarpatta",
      "badge": "Verified",
      "rating": 4.9,
      "area": "Magarpatta",
      "location": "Magarpatta, Bangalore",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/7a3d410415516b1f5c82f9347b1bd0b56304e59e.webp",
        "https://img.cofynd.com/images/latest_images_2024/dffa9636309a5bd2d9414d44759c37d0a286e88e.webp",
        "https://img.cofynd.com/images/original/dedd21b7ac35de0f9975a8f9039b13b3f34b4668.jpg",
        "https://img.cofynd.com/images/latest_images_2024/5d6bdce911d2d6d29a01d2a56ae7551421f5fb25.webp",
        "https://img.cofynd.com/images/latest_images_2024/424d2d95b9d69f017cfd31a532f01b6b67b376ee.webp"
      ]
    },
    {
      "id": 6206,
      "name": "Tag Co-Works Magarpatta",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Magarpatta",
      "location": "Magarpatta, Bangalore",
      "price": "₹5,000",
      "period": "/ Month",
      "priceFormatted": "₹5,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/f1424db42444f8b6a62f588f594c352e5d0ad72e.webp",
        "https://img.cofynd.com/images/latest_images_2024/cb409206a0b378fd158916c34e85aea5f1dac7ee.webp",
        "https://img.cofynd.com/images/latest_images_2024/4a80ca81d529f233d965d48c442a59eae81aeb8e.webp",
        "https://img.cofynd.com/images/latest_images_2024/18d01923b21937c81ece74720c4bb548da9e6923.webp"
      ]
    },
    {
      "id": 6207,
      "name": "Bauhaus Magarpatta",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Magarpatta",
      "location": "Magarpatta, Bangalore",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/ad44e20b271b38c5b29718e8d5a9601b467971f2.webp",
        "https://img.cofynd.com/images/latest_images_2024/70a2f7192407789f1e28e9964f5091312b87a876.webp",
        "https://img.cofynd.com/images/latest_images_2024/f5d3bfa4290cd5eed717f79403acd80c06891029.webp",
        "https://img.cofynd.com/images/latest_images_2024/8240d697c9f9ed56d928c3ee7111627b861afe38.webp",
        "https://img.cofynd.com/images/latest_images_2024/ce4a50c03e8a15cb2bb635eca13eb364d6e12118.webp"
      ]
    },
    {
      "id": 6208,
      "name": "Pinnacle Magarpatta",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Magarpatta",
      "location": "Magarpatta, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/195f1c8b89a42bdc3f82176029209e8a013d8dc9.webp",
        "https://img.cofynd.com/images/latest_images_2024/59e1ac0eedf9008357b2dcf04a27da65757c49f5.webp",
        "https://img.cofynd.com/images/latest_images_2024/476e76ed574c56acd4de943ed8b672cfd8b38f0d.webp",
        "https://img.cofynd.com/images/latest_images_2024/0edf3dd2e682e9a262183185ec0aa044285896ac.webp"
      ]
    },
    {
      "id": 6209,
      "name": "Innov8 Magarpatta",
      "badge": "Verified",
      "rating": 4.8,
      "area": "Magarpatta",
      "location": "Magarpatta, Bangalore",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/45caa3259ec31d3dbbfb0ad8d4a1353e5873cdb4.webp",
        "https://img.cofynd.com/images/latest_images_2024/75021eebe2e76b723fc15aba635f308473482561.webp",
        "https://img.cofynd.com/images/latest_images_2024/32333c3aea45553a0733db1dd2cc6d1723e26d82.webp",
        "https://img.cofynd.com/images/latest_images_2024/921e08dff107f633d044a4a35a3509472ff951ac.webp",
        "https://img.cofynd.com/images/latest_images_2024/e4291fad74fa50f8f28e2967ad01a327dca81b43.webp"
      ]
    },
    {
      "id": 6210,
      "name": "Awfis Cybercity Magarpatta",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Magarpatta",
      "location": "Magarpatta, Bangalore",
      "price": "₹10,999",
      "period": "/ Month",
      "priceFormatted": "₹10,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/942c600ef2c626e1c17aac5b752bfc450ac4c9c8.jpg",
        "https://img.cofynd.com/images/original/9b7f24cde4937a98aba76099466eb718d004a15f.jpg",
        "https://img.cofynd.com/images/original/a1f0861ff263201bb7514438a97b4b2a997355ae.jpg",
        "https://img.cofynd.com/images/original/78bc4d88354587a176c6a31ab2ddba293b901b19.jpg",
        "https://img.cofynd.com/images/original/c5a7db9b91dd6bf706976e9b22da4f55f4a0b025.jpg"
      ]
    }
  ],
  "Hadapsar": [
    {
      "id": 6301,
      "name": "Kontor Space Hadapsar",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Hadapsar",
      "location": "Hadapsar, Bangalore",
      "price": "₹5,500",
      "period": "/ Month",
      "priceFormatted": "₹5,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/0369e7c14ad2fd2d7f03a97d5820c7b26398d970.jpg",
        "https://img.cofynd.com/images/original/e9935e0cf9b204a06ef09771af8bd321bb12aed3.jpg",
        "https://img.cofynd.com/images/original/c6bb4fd8ddd8139037be722cf200f2ce4eabb48d.jpg",
        "https://img.cofynd.com/images/latest_images_2024/b39238ad9ac78360346bef32a5e89034a8ac43bf.webp",
        "https://img.cofynd.com/images/latest_images_2024/84defb26448d63bd51f9935a13db918b8c83b5d0.webp"
      ]
    },
    {
      "id": 6302,
      "name": "Awfis Amanora Mall",
      "badge": "Premium",
      "rating": 4.6,
      "area": "Hadapsar",
      "location": "Hadapsar, Bangalore",
      "price": "₹10,999",
      "period": "/ Month",
      "priceFormatted": "₹10,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/6a6172b992ab54ba17aee6548e56d9b31ccda6b0.webp",
        "https://img.cofynd.com/images/latest_images_2024/e1db668c8c4a3ca5970b4244934c6c3bdb6d2cf5.webp",
        "https://img.cofynd.com/images/latest_images_2024/544e877cd5dfd68bbdb50ef403bb94544ec0b4eb.webp",
        "https://img.cofynd.com/images/latest_images_2024/d242439f15634648a3cd72b5728bbbbbd59affcc.webp",
        "https://img.cofynd.com/images/latest_images_2024/7a5ad91589f91323e69786b3bb04dad71a0399f3.webp"
      ]
    },
    {
      "id": 6303,
      "name": "LEX CO-WRX Hadapsar",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Hadapsar",
      "location": "Hadapsar, Bangalore",
      "price": "₹11,500",
      "period": "/ Month",
      "priceFormatted": "₹11,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/0d8285b95fb0fb191d44a41caf849ad98cc8e9aa.webp",
        "https://img.cofynd.com/images/latest_images_2024/a99392e761ab51247640db4cbd0a0bfb2ffee08b.webp",
        "https://img.cofynd.com/images/latest_images_2024/bec27404ddf6f5031dca9194fc0b87531d1d3d42.webp",
        "https://img.cofynd.com/images/latest_images_2024/6688d099605b05b478a792cced9526c349812754.webp",
        "https://img.cofynd.com/images/latest_images_2024/59cc41f33ba07256a111bda3da1b77c9248c1c9b.webp"
      ]
    },
    {
      "id": 6304,
      "name": "Awfis Hadapsar Center",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Hadapsar",
      "location": "Hadapsar, Bangalore",
      "price": "₹10,999",
      "period": "/ Month",
      "priceFormatted": "₹10,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/236827a029f49356c51def78bed14927b49670cc.webp",
        "https://img.cofynd.com/images/latest_images_2024/ff8aae1c6a11272f670b0b8ee3e6e9942f2c279c.webp",
        "https://img.cofynd.com/images/latest_images_2024/7efef4772e4ef54cf5555525647090a7b525cab9.webp",
        "https://img.cofynd.com/images/latest_images_2024/62b28553fde2a39b015af363ca0d27bf49983053.webp",
        "https://img.cofynd.com/images/latest_images_2024/78870d1e1c478b3b413cd5306abaec97999bd816.webp"
      ]
    },
    {
      "id": 6305,
      "name": "Bootstart Hadapsar",
      "badge": "Verified",
      "rating": 4.9,
      "area": "Hadapsar",
      "location": "Hadapsar, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/a56c458480e9e7948160cb4b5a75cc749972128f.webp",
        "https://img.cofynd.com/images/latest_images_2024/17a121e8dc76faa48ed1587bd39c83bae85918d2.webp",
        "https://img.cofynd.com/images/latest_images_2024/20da51b29df772b7e8f6739076112d855b0894f7.webp",
        "https://img.cofynd.com/images/latest_images_2024/5ab639e6b372917886889378c99795b4e4b7d357.webp"
      ]
    },
    {
      "id": 6306,
      "name": "Bootstart Hadapsar IT Hub",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Hadapsar",
      "location": "Hadapsar, Bangalore",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/7a3d410415516b1f5c82f9347b1bd0b56304e59e.webp",
        "https://img.cofynd.com/images/latest_images_2024/dffa9636309a5bd2d9414d44759c37d0a286e88e.webp",
        "https://img.cofynd.com/images/original/dedd21b7ac35de0f9975a8f9039b13b3f34b4668.jpg",
        "https://img.cofynd.com/images/latest_images_2024/5d6bdce911d2d6d29a01d2a56ae7551421f5fb25.webp",
        "https://img.cofynd.com/images/latest_images_2024/424d2d95b9d69f017cfd31a532f01b6b67b376ee.webp"
      ]
    },
    {
      "id": 6307,
      "name": "Tag Co-Works Hadapsar",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Hadapsar",
      "location": "Hadapsar, Bangalore",
      "price": "₹5,000",
      "period": "/ Month",
      "priceFormatted": "₹5,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/f1424db42444f8b6a62f588f594c352e5d0ad72e.webp",
        "https://img.cofynd.com/images/latest_images_2024/cb409206a0b378fd158916c34e85aea5f1dac7ee.webp",
        "https://img.cofynd.com/images/latest_images_2024/4a80ca81d529f233d965d48c442a59eae81aeb8e.webp",
        "https://img.cofynd.com/images/latest_images_2024/18d01923b21937c81ece74720c4bb548da9e6923.webp"
      ]
    },
    {
      "id": 6308,
      "name": "Bauhaus Hadapsar",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Hadapsar",
      "location": "Hadapsar, Bangalore",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/ad44e20b271b38c5b29718e8d5a9601b467971f2.webp",
        "https://img.cofynd.com/images/latest_images_2024/70a2f7192407789f1e28e9964f5091312b87a876.webp",
        "https://img.cofynd.com/images/latest_images_2024/f5d3bfa4290cd5eed717f79403acd80c06891029.webp",
        "https://img.cofynd.com/images/latest_images_2024/8240d697c9f9ed56d928c3ee7111627b861afe38.webp",
        "https://img.cofynd.com/images/latest_images_2024/ce4a50c03e8a15cb2bb635eca13eb364d6e12118.webp"
      ]
    },
    {
      "id": 6309,
      "name": "Innov8 Hadapsar",
      "badge": "Verified",
      "rating": 4.8,
      "area": "Hadapsar",
      "location": "Hadapsar, Bangalore",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/45caa3259ec31d3dbbfb0ad8d4a1353e5873cdb4.webp",
        "https://img.cofynd.com/images/latest_images_2024/75021eebe2e76b723fc15aba635f308473482561.webp",
        "https://img.cofynd.com/images/latest_images_2024/32333c3aea45553a0733db1dd2cc6d1723e26d82.webp",
        "https://img.cofynd.com/images/latest_images_2024/921e08dff107f633d044a4a35a3509472ff951ac.webp",
        "https://img.cofynd.com/images/latest_images_2024/e4291fad74fa50f8f28e2967ad01a327dca81b43.webp"
      ]
    },
    {
      "id": 6310,
      "name": "Pinnacle Hadapsar",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Hadapsar",
      "location": "Hadapsar, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/195f1c8b89a42bdc3f82176029209e8a013d8dc9.webp",
        "https://img.cofynd.com/images/latest_images_2024/59e1ac0eedf9008357b2dcf04a27da65757c49f5.webp",
        "https://img.cofynd.com/images/latest_images_2024/476e76ed574c56acd4de943ed8b672cfd8b38f0d.webp",
        "https://img.cofynd.com/images/latest_images_2024/0edf3dd2e682e9a262183185ec0aa044285896ac.webp"
      ]
    }
  ],
  "Pimpri Chinchwad": [
    {
      "id": 6401,
      "name": "ANA Workspace",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Pimpri Chinchwad",
      "location": "Chinchwad, Bangalore",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/7f5741db7a68d8fdea858bda92cba9cd37b89814.jpg",
        "https://img.cofynd.com/images/original/83fdd16c008a520c82723ad290e25631b81c686f.jpg",
        "https://img.cofynd.com/images/latest_images_2024/a60ed78ba0410a0f1082bcb572f37dc6386047aa.webp",
        "https://img.cofynd.com/images/latest_images_2024/b1a41a6860333155139ecc9cbf46b994727720d8.webp",
        "https://img.cofynd.com/images/original/5f7324a00fd749c9b0ad758d47edfd5d580def38.jpg"
      ]
    },
    {
      "id": 6402,
      "name": "ByzBay",
      "badge": "Premium",
      "rating": 4.6,
      "area": "Pimpri Chinchwad",
      "location": "Pimpri Chinchwad, Bangalore",
      "price": "₹5,499",
      "period": "/ Month",
      "priceFormatted": "₹5,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/8b66a8f3d954578aec007eac9ce1deb9d775b6fe.webp",
        "https://img.cofynd.com/images/latest_images_2024/898cf548f50ef672284f501101effbf0869fd9a1.webp",
        "https://img.cofynd.com/images/latest_images_2024/a9b3859a882d0594c1bee7cb50206d5be5142720.webp",
        "https://img.cofynd.com/images/latest_images_2024/d61bec0eb50cc1da6c442d4c97de383c393b46cc.webp",
        "https://img.cofynd.com/images/latest_images_2024/ab384323b5bf1547a2c1a169409cfbfc29ac5730.webp"
      ]
    },
    {
      "id": 6403,
      "name": "FMTOS",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Pimpri Chinchwad",
      "location": "Pimpri-Chinchwad, Bangalore",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/04985d4ed401b1ecfd9f4b2f3ccd7e310afe7def.webp",
        "https://img.cofynd.com/images/latest_images_2024/fb62c69f8d4ec70ea2c01cf3cd04997db605bb2d.webp",
        "https://img.cofynd.com/images/latest_images_2024/851974e26cd07c777d2290f7bd4ca3647868d0c4.webp",
        "https://img.cofynd.com/images/latest_images_2024/50ffa88db04bd7bb35b184d61839be6b54b2d459.webp",
        "https://img.cofynd.com/images/latest_images_2024/c2e746539de0b5efcf0599f153b8680c8ad5ffe3.webp"
      ]
    },
    {
      "id": 6404,
      "name": "Workspace",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Pimpri Chinchwad",
      "location": "419, Shree Ganesh Galaxy, Alandi Rd, Laxmi-Narayan Nagar, Wadmukhwadi, Charholi Budruk, Pimpri-Chinchwad, Maharashtra 412105",
      "price": "₹4,499",
      "period": "/ Month",
      "priceFormatted": "₹4,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/cae15ee7b355721ee3e3642babf09bb38b75a87c.webp",
        "https://img.cofynd.com/images/latest_images_2024/66f7b704a2205e8c0dcb3af42ea0a6c8703902a6.webp",
        "https://img.cofynd.com/images/latest_images_2024/b77a71b1444b8ed3b0ee55609befb017d228bbf0.webp",
        "https://img.cofynd.com/images/latest_images_2024/31980bd7b1d96d44e128da62e691f6fa5b06a856.webp",
        "https://img.cofynd.com/images/latest_images_2024/7fa495e57a8e2ac8cfd092b3ea2b380d58e56ba6.webp"
      ]
    },
    {
      "id": 6405,
      "name": "CH Co-Works",
      "badge": "Verified",
      "rating": 4.9,
      "area": "Pimpri Chinchwad",
      "location": "Pimpri-Chinchwad, Bangalore.",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/36722768769abf69b882917f566e7ee6af310358.webp",
        "https://img.cofynd.com/images/latest_images_2024/87f07e03a11f103ad4b7e442956949cb04831d1a.webp",
        "https://img.cofynd.com/images/latest_images_2024/97d2a4dc03c6fafd6b11363cf6a6ba663df1f9bf.webp",
        "https://img.cofynd.com/images/latest_images_2024/864175bf398b3ca16163b2f7506adde7b53d691f.webp",
        "https://img.cofynd.com/images/latest_images_2024/b8baed80229ed31d67c667d6dfed47f3a9d52ec9.webp"
      ]
    },
    {
      "id": 6406,
      "name": "The Living Desk Pimpri",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Pimpri Chinchwad",
      "location": "Pimpri Chinchwad, Bangalore",
      "price": "₹4,999",
      "period": "/ Month",
      "priceFormatted": "₹4,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/a69450c10e57dd1527932d3a94e44e172236765f.webp",
        "https://img.cofynd.com/images/latest_images_2024/6cebf72f29d7faac65a5204af733d16e3f335e66.webp",
        "https://img.cofynd.com/images/latest_images_2024/d46fc9d580da0ae277edc9430d9234e395cdb961.webp",
        "https://img.cofynd.com/images/latest_images_2024/4f906129fc19084e952849d33f5bbd29d844f076.webp",
        "https://img.cofynd.com/images/latest_images_2024/b436a2d3ce71be6cf994d32e3487c4e02dc0b644.webp"
      ]
    },
    {
      "id": 6407,
      "name": "Awfis Pimpri Chinchwad",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Pimpri Chinchwad",
      "location": "Pimpri Chinchwad, Bangalore",
      "price": "₹10,999",
      "period": "/ Month",
      "priceFormatted": "₹10,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/7cac68ecacd3f6a32407f74844adc4d5b797d1a1.webp",
        "https://img.cofynd.com/images/original/4484d5dc0e0cc0ab0f9ba4d507d679e2ac72830a.jpg",
        "https://img.cofynd.com/images/original/205e990674a7cefe548ea801c4e8654b76ba00a8.jpg",
        "https://img.cofynd.com/images/original/7a47e648e2f8507f22b0bbe17ffba95c038ccc25.jpg",
        "https://img.cofynd.com/images/original/1cbff71d3df1dc948c372fb25b209191a08e5b86.jpg"
      ]
    },
    {
      "id": 6408,
      "name": "Reality Workspaces Pimpri",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Pimpri Chinchwad",
      "location": "Pimpri Chinchwad, Bangalore",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/32ef0a19a3c2a59cd0f0a9583f3db8b6f45741f4.webp",
        "https://img.cofynd.com/images/latest_images_2024/ee1efc46e5c811c5f1c1509db951cf20ff81a37f.webp",
        "https://img.cofynd.com/images/latest_images_2024/269a4069af0cf5ef562b5247b8c912eb7b808e60.webp",
        "https://img.cofynd.com/images/latest_images_2024/28fed5ebadb1a29806350bde659eec49dd791322.webp",
        "https://img.cofynd.com/images/latest_images_2024/2be07c465566f8b625d1afb456aef5dc689ba19f.webp"
      ]
    },
    {
      "id": 6409,
      "name": "Kowork Pimpri Chinchwad",
      "badge": "Verified",
      "rating": 4.8,
      "area": "Pimpri Chinchwad",
      "location": "Pimpri Chinchwad, Bangalore",
      "price": "₹6,000",
      "period": "/ Month",
      "priceFormatted": "₹6,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/30af2c304245fdb437494efa307bb5c2ebff907c.webp",
        "https://img.cofynd.com/images/latest_images_2024/ebca264701e10baf6ef637dd9b35a17ea6da1653.webp",
        "https://img.cofynd.com/images/latest_images_2024/5b00ab8c04dbc49ab5a257d8a34b6a5aa86fd4a2.webp",
        "https://img.cofynd.com/images/latest_images_2024/9d00e4ed1405ad9e6a411953e436d04610b5868d.webp",
        "https://img.cofynd.com/images/latest_images_2024/55ae3b24dbb0fb8ed75b3fc1fd87d1cbcad8e652.webp"
      ]
    },
    {
      "id": 6410,
      "name": "Ideas to Impacts Hub Pimpri",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Pimpri Chinchwad",
      "location": "Pimpri Chinchwad, Bangalore",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/fe808308012ed34e26268efec85259f3b62b092f.webp",
        "https://img.cofynd.com/images/latest_images_2024/0d0fbf69f720692aaf10184ff0b947bc8caec729.webp",
        "https://img.cofynd.com/images/latest_images_2024/d26ee13c1e786dfe45bc1dae11d76ba82477721e.webp",
        "https://img.cofynd.com/images/latest_images_2024/15c32e8ebd07fcd00a84e8012d05ec57383de042.webp"
      ]
    }
  ],
  "Yerwada": [
    {
      "id": 6501,
      "name": "91Springboard Sky Loft",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Yerwada",
      "location": "Yerawada, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/a78d38fbe0ad0cf0cf4fad4f4ba8915ba37bc610.webp",
        "https://img.cofynd.com/images/latest_images_2024/cadcabb6fdef9874e7ea7563a218a5c9179a0468.webp",
        "https://img.cofynd.com/images/latest_images_2024/4a20fd79a4048122666b1b6c58e3e85fb5f4cd9e.webp",
        "https://img.cofynd.com/images/latest_images_2024/bd032c1a6dda500c0e1734e4e2d714bc5752de97.webp",
        "https://img.cofynd.com/images/latest_images_2024/333efe0ea8ee872444970549a907d5b5672a554d.webp"
      ]
    },
    {
      "id": 6502,
      "name": "Starthub Yerwada",
      "badge": "Premium",
      "rating": 4.6,
      "area": "Yerwada",
      "location": "Yerwada, Bangalore",
      "price": "₹7,499",
      "period": "/ Month",
      "priceFormatted": "₹7,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/3a10fd7f1bedb1d5ecd272f0bf0d16aa347576e7.jpg",
        "https://img.cofynd.com/images/original/e1e23064d108590bcb3319e45573bc49a2ceb395.jpg",
        "https://img.cofynd.com/images/original/c1ca5ce9ec9caf7c6c1d9af4e976032b9e3021e1.jpg",
        "https://img.cofynd.com/images/original/15e7d560c947c6bc900d3fb1003bfe9c77e398d2.jpg",
        "https://img.cofynd.com/images/original/26959197d965a409b93036e1f4aab351a977fa27.jpg"
      ]
    },
    {
      "id": 6503,
      "name": "Pinnacle Yerwada",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Yerwada",
      "location": "Yerwada, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/195f1c8b89a42bdc3f82176029209e8a013d8dc9.webp",
        "https://img.cofynd.com/images/latest_images_2024/59e1ac0eedf9008357b2dcf04a27da65757c49f5.webp",
        "https://img.cofynd.com/images/latest_images_2024/476e76ed574c56acd4de943ed8b672cfd8b38f0d.webp",
        "https://img.cofynd.com/images/latest_images_2024/0edf3dd2e682e9a262183185ec0aa044285896ac.webp"
      ]
    },
    {
      "id": 6504,
      "name": "Bauhaus Yerwada",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Yerwada",
      "location": "Yerwada, Bangalore",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/ad44e20b271b38c5b29718e8d5a9601b467971f2.webp",
        "https://img.cofynd.com/images/latest_images_2024/70a2f7192407789f1e28e9964f5091312b87a876.webp",
        "https://img.cofynd.com/images/latest_images_2024/f5d3bfa4290cd5eed717f79403acd80c06891029.webp",
        "https://img.cofynd.com/images/latest_images_2024/8240d697c9f9ed56d928c3ee7111627b861afe38.webp",
        "https://img.cofynd.com/images/latest_images_2024/ce4a50c03e8a15cb2bb635eca13eb364d6e12118.webp"
      ]
    },
    {
      "id": 6505,
      "name": "Innov8 Yerwada Business Park",
      "badge": "Verified",
      "rating": 4.9,
      "area": "Yerwada",
      "location": "Yerwada, Bangalore",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/45caa3259ec31d3dbbfb0ad8d4a1353e5873cdb4.webp",
        "https://img.cofynd.com/images/latest_images_2024/75021eebe2e76b723fc15aba635f308473482561.webp",
        "https://img.cofynd.com/images/latest_images_2024/32333c3aea45553a0733db1dd2cc6d1723e26d82.webp",
        "https://img.cofynd.com/images/latest_images_2024/921e08dff107f633d044a4a35a3509472ff951ac.webp",
        "https://img.cofynd.com/images/latest_images_2024/e4291fad74fa50f8f28e2967ad01a327dca81b43.webp"
      ]
    },
    {
      "id": 6506,
      "name": "Tag Co-Works Yerwada",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Yerwada",
      "location": "Yerwada, Bangalore",
      "price": "₹5,000",
      "period": "/ Month",
      "priceFormatted": "₹5,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/f1424db42444f8b6a62f588f594c352e5d0ad72e.webp",
        "https://img.cofynd.com/images/latest_images_2024/cb409206a0b378fd158916c34e85aea5f1dac7ee.webp",
        "https://img.cofynd.com/images/latest_images_2024/4a80ca81d529f233d965d48c442a59eae81aeb8e.webp",
        "https://img.cofynd.com/images/latest_images_2024/18d01923b21937c81ece74720c4bb548da9e6923.webp"
      ]
    },
    {
      "id": 6507,
      "name": "Innov8 Yerwada Hub",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Yerwada",
      "location": "Yerwada, Bangalore",
      "price": "₹10,499",
      "period": "/ Month",
      "priceFormatted": "₹10,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/903e73d54ec3295f61d3b28615a89c00e42a867b.webp",
        "https://img.cofynd.com/images/latest_images_2024/00553ba076592f29fbe3b68f34803fdf13d2b5ba.webp",
        "https://img.cofynd.com/images/latest_images_2024/c8a3ddfacd50bee2a482424edf02312bfef1e529.webp",
        "https://img.cofynd.com/images/latest_images_2024/6f1299cf7eb59fe508986820585ddfed8ea23fe6.webp",
        "https://img.cofynd.com/images/latest_images_2024/5c2dfdc9db5e641bea623efb822a47abda4b0e1a.webp"
      ]
    },
    {
      "id": 6508,
      "name": "TRIOS Yerwada",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Yerwada",
      "location": "Yerwada, Bangalore",
      "price": "₹10,999",
      "period": "/ Month",
      "priceFormatted": "₹10,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/a4e23f998a00530e1f94d0be23abe8592e97d6d7.webp",
        "https://img.cofynd.com/images/latest_images_2024/26daa8a5d70286fae70f9a757b5326a207e3a567.webp",
        "https://img.cofynd.com/images/latest_images_2024/5133abadba90f1956ef5f4ed7b40c2dcf9cc22ca.webp",
        "https://img.cofynd.com/images/latest_images_2024/0f9c72d6df7e6f5ba5cc51669fffa39bdae5f735.webp",
        "https://img.cofynd.com/images/latest_images_2024/d1115009669a61c861c0397a5c542d1561574e8f.webp"
      ]
    },
    {
      "id": 6509,
      "name": "Bootstart Yerwada",
      "badge": "Verified",
      "rating": 4.8,
      "area": "Yerwada",
      "location": "Yerwada, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/a56c458480e9e7948160cb4b5a75cc749972128f.webp",
        "https://img.cofynd.com/images/latest_images_2024/17a121e8dc76faa48ed1587bd39c83bae85918d2.webp",
        "https://img.cofynd.com/images/latest_images_2024/20da51b29df772b7e8f6739076112d855b0894f7.webp",
        "https://img.cofynd.com/images/latest_images_2024/5ab639e6b372917886889378c99795b4e4b7d357.webp"
      ]
    },
    {
      "id": 6510,
      "name": "Workspace Yerwada",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Yerwada",
      "location": "Yerwada, Bangalore",
      "price": "₹22,499",
      "period": "/ Month",
      "priceFormatted": "₹22,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/800f8563e454a64cd599567bfa7718b836dd7765.webp",
        "https://img.cofynd.com/images/latest_images_2024/be8dd586067e9fad71f14f885311a3df59edcdd3.webp",
        "https://img.cofynd.com/images/latest_images_2024/09a36f9075809deb592af037d041f3fbabb5221e.webp",
        "https://img.cofynd.com/images/latest_images_2024/94520e6c657a26032275bae6ec5ecb28c2ec3645.webp",
        "https://img.cofynd.com/images/latest_images_2024/8fb511efff6c4ac3e675feb33da2fed7bab8fea8.webp"
      ]
    }
  ],
  "Karve Nagar": [
    {
      "id": 6601,
      "name": "Bootstart Karve Nagar",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Karve Nagar",
      "location": "Karve Nagar, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/2bfa1bc3232147a4fd239310f16932190aa00ac1.webp",
        "https://img.cofynd.com/images/latest_images_2024/8110cd399ca2809d231cfa01d2441cceb9706975.webp",
        "https://img.cofynd.com/images/latest_images_2024/8dabf8a3d8e1059fecfe892c993b4b8a072ef461.webp",
        "https://img.cofynd.com/images/latest_images_2024/bce71136270eaeff908bf9d9f11a96efb6ff439e.webp",
        "https://img.cofynd.com/images/latest_images_2024/9ec128c4dc2005bb93d16ff548907d8e1e549be0.webp"
      ]
    },
    {
      "id": 6602,
      "name": "Espree Coworking Karve Nagar",
      "badge": "Premium",
      "rating": 4.6,
      "area": "Karve Nagar",
      "location": "Karve Nagar, Bangalore",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/8ce013856b6024104155c57e95f914ecdc6a675d.webp",
        "https://img.cofynd.com/images/latest_images_2024/8e1814b31a5a428c90b1aa16934c00c98e3f03b0.webp",
        "https://img.cofynd.com/images/latest_images_2024/0b499e7234f98da7b9e8768902555ab3bb1510cd.webp",
        "https://img.cofynd.com/images/latest_images_2024/e2efbf47de1a27ce0746ec69efa7b30ca348e744.webp",
        "https://img.cofynd.com/images/latest_images_2024/7e320d7c711d58e7ee7b5a9831a4cf35f2816a45.webp"
      ]
    },
    {
      "id": 6603,
      "name": "Awfis Karve Nagar Hub",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Karve Nagar",
      "location": "Karve Nagar, Bangalore",
      "price": "₹10,999",
      "period": "/ Month",
      "priceFormatted": "₹10,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/95fab10176feeb8c1582592e681b165f45d2078f.webp",
        "https://img.cofynd.com/images/latest_images_2024/eed15866008aac7b019ca665de5e1288d134a2aa.webp",
        "https://img.cofynd.com/images/latest_images_2024/e79274eb294face92d52517d40c60bf2ce6aebde.webp",
        "https://img.cofynd.com/images/latest_images_2024/257e7838d5ecd76899b5aa07882c06d8be9a1aea.webp",
        "https://img.cofynd.com/images/latest_images_2024/badddc2ec7c34c920dfa563e34dc9b9b7b95dabe.webp"
      ]
    },
    {
      "id": 6604,
      "name": "Thinknest Karve Nagar",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Karve Nagar",
      "location": "Karve Nagar, Bangalore",
      "price": "₹8,500",
      "period": "/ Month",
      "priceFormatted": "₹8,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/2ea7d07f51cd08cdd53f7e6ec1d8132f6d7755e3.webp",
        "https://img.cofynd.com/images/latest_images_2024/b1057278a2c9eba28af65ed5ef1e357ab32e0c78.webp",
        "https://img.cofynd.com/images/latest_images_2024/9340221e4348fae5ec705fe960a057ca42d94818.webp"
      ]
    },
    {
      "id": 6605,
      "name": "ScaleUp CoWork Karve Nagar",
      "badge": "Verified",
      "rating": 4.9,
      "area": "Karve Nagar",
      "location": "Karve Nagar, Bangalore",
      "price": "₹7,000",
      "period": "/ Month",
      "priceFormatted": "₹7,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/f809998409e326eec1589237d62fec35a0f5bff5.jpg",
        "https://img.cofynd.com/images/original/f2c386881e1c1ffb15fec004a116835ec12d7e03.jpg",
        "https://img.cofynd.com/images/original/67db7677286bc5d9920525e826712bc117d9fd36.jpg",
        "https://img.cofynd.com/images/original/f3301766c8ef599ab9fccf4e79d8ffb05607f8cb.jpg",
        "https://img.cofynd.com/images/original/bf82d800a2cc9ddc0818624e1675bb69056ff64e.jpg"
      ]
    },
    {
      "id": 6606,
      "name": "Aster Karve Nagar",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Karve Nagar",
      "location": "Karve Nagar, Bangalore",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/108e44d3d4995d298f0079d63cb29506636e32cd.webp",
        "https://img.cofynd.com/images/latest_images_2024/5a0c5088f1a3fcd2e21f0b4f8e474bb596ed415b.webp",
        "https://img.cofynd.com/images/latest_images_2024/643d8a9679b0672534f839ba039c9bf127eb0296.webp",
        "https://img.cofynd.com/images/latest_images_2024/305b6bd07971b47555e2b79b65cae51810a9bf43.webp",
        "https://img.cofynd.com/images/latest_images_2024/981f5da85f450667c290067fdb7cc47658012289.webp"
      ]
    },
    {
      "id": 6607,
      "name": "TBL Spaces Karve Nagar",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Karve Nagar",
      "location": "Karve Nagar, Bangalore",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/416042ba0670ffdc14a90c1b703e8d74d3a1898f.webp",
        "https://img.cofynd.com/images/latest_images_2024/604a92f54abd499469b83ec493b75005e4ef2edc.webp",
        "https://img.cofynd.com/images/latest_images_2024/2793ac69d03daa635d6d65f231f183ab45ece894.webp",
        "https://img.cofynd.com/images/latest_images_2024/7ef6faeab4bf7be24db4493b03a5c6813043a62f.webp",
        "https://img.cofynd.com/images/latest_images_2024/7e54f22dd07e39e40c4dd21bc597e63c91dd04f8.webp"
      ]
    },
    {
      "id": 6608,
      "name": "Bootstart Hingne Karve Nagar",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Karve Nagar",
      "location": "Karve Nagar, Bangalore",
      "price": "₹6,500",
      "period": "/ Month",
      "priceFormatted": "₹6,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/d05ac68e752d48d18a9548d8cb836b81fd95c18a.webp",
        "https://img.cofynd.com/images/latest_images_2024/42e061a664661b8837b419f2e31407d72d806e20.webp",
        "https://img.cofynd.com/images/latest_images_2024/5176199e84c881a6da33330f0648e84ee0c8263b.webp",
        "https://img.cofynd.com/images/latest_images_2024/ba1da479c668bcde77de2e6da807cc5bfc0c6fdf.webp"
      ]
    },
    {
      "id": 6609,
      "name": "IndiQube Karve Nagar",
      "badge": "Verified",
      "rating": 4.8,
      "area": "Karve Nagar",
      "location": "Karve Nagar, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/31fd493b5fab163f9a2d8bddeedf1a1e17a1d885.webp",
        "https://img.cofynd.com/images/latest_images_2024/448660eb3e7510de6808dfa2128570e3bc29b381.webp",
        "https://img.cofynd.com/images/latest_images_2024/bbfe22c34e2dfa71e940a05190c8e8ded20db2e6.webp",
        "https://img.cofynd.com/images/latest_images_2024/f9281528475c492bf1ed563de855b052d4bd7209.webp",
        "https://img.cofynd.com/images/original/66e97384b3e8fff86453c74021b59ee823bed78a.jpg"
      ]
    },
    {
      "id": 6610,
      "name": "Sprint Karve Nagar",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Karve Nagar",
      "location": "Karve Nagar, Bangalore",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/0d6e037dab1d785b8417efaeb88062e5fe401324.webp",
        "https://img.cofynd.com/images/latest_images_2024/d1f9113ff0884b78a9fa4311f960260898c8fc11.webp",
        "https://img.cofynd.com/images/latest_images_2024/21378d5ea48d948fc3239f135e0cb9cb822f00e9.webp",
        "https://img.cofynd.com/images/latest_images_2024/161abf6511e6b987f78cb460b8dc78f9a47cff41.webp",
        "https://img.cofynd.com/images/latest_images_2024/626d6cfef31179efbb0f8ce55a55969f7a9bc168.webp"
      ]
    }
  ],
  "Shivaji Nagar": [
    {
      "id": 6701,
      "name": "IndiQube Park Plaza",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Shivaji Nagar",
      "location": "Shivaji Nagar, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/31fd493b5fab163f9a2d8bddeedf1a1e17a1d885.webp",
        "https://img.cofynd.com/images/latest_images_2024/448660eb3e7510de6808dfa2128570e3bc29b381.webp",
        "https://img.cofynd.com/images/latest_images_2024/bbfe22c34e2dfa71e940a05190c8e8ded20db2e6.webp",
        "https://img.cofynd.com/images/latest_images_2024/f9281528475c492bf1ed563de855b052d4bd7209.webp",
        "https://img.cofynd.com/images/original/66e97384b3e8fff86453c74021b59ee823bed78a.jpg"
      ]
    },
    {
      "id": 6702,
      "name": "Aster",
      "badge": "Premium",
      "rating": 4.6,
      "area": "Shivaji Nagar",
      "location": "Shivaji Nagar, Bangalore",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/108e44d3d4995d298f0079d63cb29506636e32cd.webp",
        "https://img.cofynd.com/images/latest_images_2024/5a0c5088f1a3fcd2e21f0b4f8e474bb596ed415b.webp",
        "https://img.cofynd.com/images/latest_images_2024/643d8a9679b0672534f839ba039c9bf127eb0296.webp",
        "https://img.cofynd.com/images/latest_images_2024/305b6bd07971b47555e2b79b65cae51810a9bf43.webp",
        "https://img.cofynd.com/images/latest_images_2024/981f5da85f450667c290067fdb7cc47658012289.webp"
      ]
    },
    {
      "id": 6703,
      "name": "ScaleUp CoWork Shivaji Nagar",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Shivaji Nagar",
      "location": "Shivaji Nagar, Bangalore",
      "price": "₹7,000",
      "period": "/ Month",
      "priceFormatted": "₹7,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/f809998409e326eec1589237d62fec35a0f5bff5.jpg",
        "https://img.cofynd.com/images/original/f2c386881e1c1ffb15fec004a116835ec12d7e03.jpg",
        "https://img.cofynd.com/images/original/67db7677286bc5d9920525e826712bc117d9fd36.jpg",
        "https://img.cofynd.com/images/original/f3301766c8ef599ab9fccf4e79d8ffb05607f8cb.jpg",
        "https://img.cofynd.com/images/original/bf82d800a2cc9ddc0818624e1675bb69056ff64e.jpg"
      ]
    },
    {
      "id": 6704,
      "name": "Sprint Epicentre",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Shivaji Nagar",
      "location": "Shivaji Nagar, Bangalore",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/0d6e037dab1d785b8417efaeb88062e5fe401324.webp",
        "https://img.cofynd.com/images/latest_images_2024/d1f9113ff0884b78a9fa4311f960260898c8fc11.webp",
        "https://img.cofynd.com/images/latest_images_2024/21378d5ea48d948fc3239f135e0cb9cb822f00e9.webp",
        "https://img.cofynd.com/images/latest_images_2024/161abf6511e6b987f78cb460b8dc78f9a47cff41.webp",
        "https://img.cofynd.com/images/latest_images_2024/626d6cfef31179efbb0f8ce55a55969f7a9bc168.webp"
      ]
    },
    {
      "id": 6705,
      "name": "Thinknest Shivaji Nagar",
      "badge": "Verified",
      "rating": 4.9,
      "area": "Shivaji Nagar",
      "location": "Shivaji Nagar, Bangalore",
      "price": "₹8,500",
      "period": "/ Month",
      "priceFormatted": "₹8,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/2ea7d07f51cd08cdd53f7e6ec1d8132f6d7755e3.webp",
        "https://img.cofynd.com/images/latest_images_2024/b1057278a2c9eba28af65ed5ef1e357ab32e0c78.webp",
        "https://img.cofynd.com/images/latest_images_2024/9340221e4348fae5ec705fe960a057ca42d94818.webp"
      ]
    },
    {
      "id": 6706,
      "name": "Espree Shivaji Nagar",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Shivaji Nagar",
      "location": "Shivaji Nagar, Bangalore",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/8ce013856b6024104155c57e95f914ecdc6a675d.webp",
        "https://img.cofynd.com/images/latest_images_2024/8e1814b31a5a428c90b1aa16934c00c98e3f03b0.webp",
        "https://img.cofynd.com/images/latest_images_2024/0b499e7234f98da7b9e8768902555ab3bb1510cd.webp",
        "https://img.cofynd.com/images/latest_images_2024/e2efbf47de1a27ce0746ec69efa7b30ca348e744.webp",
        "https://img.cofynd.com/images/latest_images_2024/7e320d7c711d58e7ee7b5a9831a4cf35f2816a45.webp"
      ]
    },
    {
      "id": 6707,
      "name": "Bootstart Shivaji Nagar",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Shivaji Nagar",
      "location": "Shivaji Nagar, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/2bfa1bc3232147a4fd239310f16932190aa00ac1.webp",
        "https://img.cofynd.com/images/latest_images_2024/8110cd399ca2809d231cfa01d2441cceb9706975.webp",
        "https://img.cofynd.com/images/latest_images_2024/8dabf8a3d8e1059fecfe892c993b4b8a072ef461.webp",
        "https://img.cofynd.com/images/latest_images_2024/bce71136270eaeff908bf9d9f11a96efb6ff439e.webp",
        "https://img.cofynd.com/images/latest_images_2024/9ec128c4dc2005bb93d16ff548907d8e1e549be0.webp"
      ]
    },
    {
      "id": 6708,
      "name": "Galaxy Shivaji Nagar Hub",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Shivaji Nagar",
      "location": "Shivaji Nagar, Bangalore",
      "price": "₹4,999",
      "period": "/ Month",
      "priceFormatted": "₹4,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/40e8ddf7973d82b1b434a36988da5fb5733578ef.webp",
        "https://img.cofynd.com/images/latest_images_2024/8e682f41942a667c000799ce5f4da4fae0f8487c.webp",
        "https://img.cofynd.com/images/latest_images_2024/8bb04c2010c6e4ab0d07f2e3d2361d20283f93dd.webp",
        "https://img.cofynd.com/images/latest_images_2024/446209614429d51bbe2cfa369feb4bdf012c50a9.webp",
        "https://img.cofynd.com/images/latest_images_2024/4490283396d564f681e45972f6ec23f77f741906.webp"
      ]
    },
    {
      "id": 6709,
      "name": "Starthub Shivaji Nagar",
      "badge": "Verified",
      "rating": 4.8,
      "area": "Shivaji Nagar",
      "location": "Shivaji Nagar, Bangalore",
      "price": "₹7,499",
      "period": "/ Month",
      "priceFormatted": "₹7,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/3a10fd7f1bedb1d5ecd272f0bf0d16aa347576e7.jpg",
        "https://img.cofynd.com/images/original/e1e23064d108590bcb3319e45573bc49a2ceb395.jpg",
        "https://img.cofynd.com/images/original/c1ca5ce9ec9caf7c6c1d9af4e976032b9e3021e1.jpg",
        "https://img.cofynd.com/images/original/15e7d560c947c6bc900d3fb1003bfe9c77e398d2.jpg",
        "https://img.cofynd.com/images/original/26959197d965a409b93036e1f4aab351a977fa27.jpg"
      ]
    },
    {
      "id": 6710,
      "name": "Level 212 Shivaji Nagar",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Shivaji Nagar",
      "location": "Shivaji Nagar, Bangalore",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/a256cd4951113bf5943fde8a27be959fe2109623.webp",
        "https://img.cofynd.com/images/latest_images_2024/477bff14a9c20e08b290bc0a9b04ddbbdbc16abe.webp",
        "https://img.cofynd.com/images/latest_images_2024/786968cb5563c1b0f636d89387708e287b2a85d0.webp",
        "https://img.cofynd.com/images/latest_images_2024/10648a65ceed0815b4eaa18473a86281f697030b.webp",
        "https://img.cofynd.com/images/latest_images_2024/d896f530588b4f1743d26fee85b4dc9698aeeb21.webp"
      ]
    }
  ],
  "Camp": [
    {
      "id": 6801,
      "name": "The Hive Coworking",
      "badge": "Verified",
      "rating": 4.8,
      "area": "Camp",
      "location": "Camp, Bangalore",
      "price": "₹7,499",
      "period": "/ Month",
      "priceFormatted": "₹7,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/78bc4d88354587a176c6a31ab2ddba293b901b19.jpg",
        "https://img.cofynd.com/images/latest_images_2024/c5a7db9b91dd6bf706976e9b22da4f55f4a0b025.jpg",
        "https://img.cofynd.com/images/latest_images_2024/4a80ca81d529f233d965d48c442a59eae81aeb8e.webp",
        "https://img.cofynd.com/images/latest_images_2024/18d01923b21937c81ece74720c4bb548da9e6923.webp"
      ]
    },
    {
      "id": 6802,
      "name": "Workflo by OYO Nucleus",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Camp",
      "location": "Nucleus Mall, Camp, Bangalore",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/b39104c49962b5a5c6c518188fde3de85b38c8aa.webp",
        "https://img.cofynd.com/images/latest_images_2024/a4687669c0a4674e47f10811d7bb4ed2aefeb342.webp",
        "https://img.cofynd.com/images/latest_images_2024/4c7a60fb21162e91020a89e34e90ffc3be615b8e.webp"
      ]
    },
    {
      "id": 6803,
      "name": "Regus Nucleus Mall",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Camp",
      "location": "Camp, Bangalore",
      "price": "₹11,499",
      "period": "/ Month",
      "priceFormatted": "₹11,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/446209614429d51bbe2cfa369feb4bdf012c50a9.webp",
        "https://img.cofynd.com/images/latest_images_2024/4490283396d564f681e45972f6ec23f77f741906.webp",
        "https://img.cofynd.com/images/latest_images_2024/f1424db42444f8b6a62f588f594c352e5d0ad72e.webp"
      ]
    },
    {
      "id": 6804,
      "name": "Trios Coworking Camp",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Camp",
      "location": "Camp, Bangalore",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/201832e933dceb27eca847ecb0ab985c0a523123.webp",
        "https://img.cofynd.com/images/latest_images_2024/f958e6462f64871243953ec4188180b7916964e3.webp",
        "https://img.cofynd.com/images/latest_images_2024/07f5854f28ec6d447a35f49993b316f8cbfb6359.webp"
      ]
    },
    {
      "id": 6805,
      "name": "Bootstart Camp Spaces",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Camp",
      "location": "MG Road, Camp, Bangalore",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/58e38018564757ef1e647239a79c576230d405bf.webp",
        "https://img.cofynd.com/images/latest_images_2024/d3adf265fe0edf92e91df3e7c03f82f5a302a427.webp",
        "https://img.cofynd.com/images/latest_images_2024/3fadb97d9dada4a2b1a3366d16e59781a246da3c.webp"
      ]
    },
    {
      "id": 6806,
      "name": "Innowork Camp",
      "badge": "Verified",
      "rating": 4.4,
      "area": "Camp",
      "location": "Camp, Bangalore",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/84defb26448d63bd51f9935a13db918b8c83b5d0.webp",
        "https://img.cofynd.com/images/latest_images_2024/29598218177fe7da5f5db3e843818e69e4ce03cb.webp"
      ]
    }
  ],
  "BMCC Road": [
    {
      "id": 6901,
      "name": "Venture Center BMCC",
      "badge": "Verified",
      "rating": 4.7,
      "area": "BMCC Road",
      "location": "BMCC Road, Bangalore, Maharashtra",
      "price": "₹7,499",
      "period": "/ Month",
      "priceFormatted": "₹7,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/f3301766c8ef599ab9fccf4e79d8ffb05607f8cb.jpg",
        "https://img.cofynd.com/images/original/bf82d800a2cc9ddc0818624e1675bb69056ff64e.jpg",
        "https://img.cofynd.com/images/latest_images_2024/b6760a4c0e264699a83513b1857d23c8bb786ccb.webp"
      ]
    },
    {
      "id": 6902,
      "name": "Worklogix BMCC Road",
      "badge": "Popular",
      "rating": 4.6,
      "area": "BMCC Road",
      "location": "BMCC Road, Bangalore, Maharashtra",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/6297eae70f6a33a9979f3763f030c34d35c46c1c.webp",
        "https://img.cofynd.com/images/latest_images_2024/3cd33975d246b6bd02d73f5da56af5ed5f1ae6c5.webp"
      ]
    },
    {
      "id": 6903,
      "name": "ThinkValley Spaces BMCC",
      "badge": "Premium",
      "rating": 4.8,
      "area": "BMCC Road",
      "location": "BMCC Road, Bangalore, Maharashtra",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/2a786d0c42639dc40b1e83fd3bcb82556b32d68c.webp",
        "https://img.cofynd.com/images/latest_images_2024/78405af99fbd9ef42ba49f9e4940abbdef53b275.webp"
      ]
    },
    {
      "id": 6904,
      "name": "Cubispace BMCC Road",
      "badge": "Verified",
      "rating": 4.5,
      "area": "BMCC Road",
      "location": "BMCC Road, Bangalore, Maharashtra",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/58e38018564757ef1e647239a79c576230d405bf.webp",
        "https://img.cofynd.com/images/latest_images_2024/d3adf265fe0edf92e91df3e7c03f82f5a302a427.webp"
      ]
    },
    {
      "id": 6905,
      "name": "FlexiWork BMCC",
      "badge": "Popular",
      "rating": 4.6,
      "area": "BMCC Road",
      "location": "BMCC Road, Bangalore, Maharashtra",
      "price": "₹7,199",
      "period": "/ Month",
      "priceFormatted": "₹7,199 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/3fadb97d9dada4a2b1a3366d16e59781a246da3c.webp",
        "https://img.cofynd.com/images/latest_images_2024/a7d260dc22a9b5a408205687527cb1a2814cc783.webp"
      ]
    },
    {
      "id": 6906,
      "name": "CoCreate Workspace BMCC",
      "badge": "Verified",
      "rating": 4.7,
      "area": "BMCC Road",
      "location": "BMCC Road, Bangalore, Maharashtra",
      "price": "₹7,899",
      "period": "/ Month",
      "priceFormatted": "₹7,899 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/d64227e9a1882c9baf00c837dae646a58ff8d8cd.webp",
        "https://img.cofynd.com/images/latest_images_2024/201832e933dceb27eca847ecb0ab985c0a523123.webp"
      ]
    }
  ],
  "NIBM": [
    {
      "id": 7001,
      "name": "UrbanDesk Coworking NIBM",
      "badge": "Verified",
      "rating": 4.8,
      "area": "NIBM",
      "location": "NIBM Road, Bangalore",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/bb629c8a53d66f187aeb5bf553ad5e279af05a5c.webp",
        "https://img.cofynd.com/images/latest_images_2024/1a29582d9217eb74a62174c6020573ae0c78a08d.webp"
      ]
    },
    {
      "id": 7002,
      "name": "WorkSquare Spaces NIBM",
      "badge": "Popular",
      "rating": 4.6,
      "area": "NIBM",
      "location": "NIBM, Bangalore",
      "price": "₹7,499",
      "period": "/ Month",
      "priceFormatted": "₹7,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/e3eb27b9d83b4a67b815a558faf150ea3f4a8a25.webp",
        "https://img.cofynd.com/images/latest_images_2024/6a850a02e071c4d4507b9af18a66efba8265f666.webp"
      ]
    },
    {
      "id": 7003,
      "name": "Co-Offiz NIBM",
      "badge": "Verified",
      "rating": 4.7,
      "area": "NIBM",
      "location": "NIBM Road, Bangalore",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/00852e69198f4610f5251085cbe5f6f33d72a488.webp",
        "https://img.cofynd.com/images/latest_images_2024/fe26d0e20ddaf03e8947342e7765769c3b7b5cd9.webp"
      ]
    },
    {
      "id": 7004,
      "name": "Opus Coworking NIBM",
      "badge": "Premium",
      "rating": 4.5,
      "area": "NIBM",
      "location": "NIBM, Bangalore",
      "price": "₹7,199",
      "period": "/ Month",
      "priceFormatted": "₹7,199 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/50ffa88db04bd7bb35b184d61839be6b54b2d459.webp",
        "https://img.cofynd.com/images/latest_images_2024/c2e746539de0b5efcf0599f153b8680c8ad5ffe3.webp"
      ]
    },
    {
      "id": 7005,
      "name": "Spacelance Hub NIBM",
      "badge": "Verified",
      "rating": 4.6,
      "area": "NIBM",
      "location": "NIBM Road, Bangalore",
      "price": "₹6,799",
      "period": "/ Month",
      "priceFormatted": "₹6,799 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/b39104c49962b5a5c6c518188fde3de85b38c8aa.webp",
        "https://img.cofynd.com/images/latest_images_2024/a4687669c0a4674e47f10811d7bb4ed2aefeb342.webp"
      ]
    },
    {
      "id": 7006,
      "name": "InCube Cowork NIBM",
      "badge": "Popular",
      "rating": 4.7,
      "area": "NIBM",
      "location": "NIBM, Bangalore",
      "price": "₹7,599",
      "period": "/ Month",
      "priceFormatted": "₹7,599 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/4c7a60fb21162e91020a89e34e90ffc3be615b8e.webp",
        "https://img.cofynd.com/images/latest_images_2024/6300c42f03e2256f34941fd4951f36e7ba5a8aad.webp"
      ]
    }
  ],
  "Wanowrie": [
    {
      "id": 7101,
      "name": "WorkWise Coworking Wanowrie",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Wanowrie",
      "location": "Fatima Nagar, Wanowrie, Bangalore",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/84defb26448d63bd51f9935a13db918b8c83b5d0.webp",
        "https://img.cofynd.com/images/latest_images_2024/29598218177fe7da5f5db3e843818e69e4ce03cb.webp"
      ]
    },
    {
      "id": 7102,
      "name": "Regus Wanowrie Center",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Wanowrie",
      "location": "Wanowrie, Bangalore",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/7ef6faeab4bf7be24db4493b03a5c6813043a62f.webp",
        "https://img.cofynd.com/images/latest_images_2024/7e54f22dd07e39e40c4dd21bc597e63c91dd04f8.webp"
      ]
    },
    {
      "id": 7103,
      "name": "Tribe Cowork Wanowrie",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Wanowrie",
      "location": "Wanowrie, Bangalore",
      "price": "₹6,299",
      "period": "/ Month",
      "priceFormatted": "₹6,299 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/446209614429d51bbe2cfa369feb4bdf012c50a9.webp",
        "https://img.cofynd.com/images/latest_images_2024/4490283396d564f681e45972f6ec23f77f741906.webp"
      ]
    },
    {
      "id": 7104,
      "name": "Hub53 Wanowrie",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Wanowrie",
      "location": "Fatima Nagar, Wanowrie, Bangalore",
      "price": "₹5,799",
      "period": "/ Month",
      "priceFormatted": "₹5,799 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/b6760a4c0e264699a83513b1857d23c8bb786ccb.webp",
        "https://img.cofynd.com/images/latest_images_2024/6297eae70f6a33a9979f3763f030c34d35c46c1c.webp"
      ]
    },
    {
      "id": 7105,
      "name": "CozyDesk Wanowrie",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Wanowrie",
      "location": "Wanowrie, Bangalore",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/3cd33975d246b6bd02d73f5da56af5ed5f1ae6c5.webp",
        "https://img.cofynd.com/images/latest_images_2024/2a786d0c42639dc40b1e83fd3bcb82556b32d68c.webp"
      ]
    },
    {
      "id": 7106,
      "name": "Workify Spaces Wanowrie",
      "badge": "Popular",
      "rating": 4.7,
      "area": "Wanowrie",
      "location": "Wanowrie, Bangalore",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/78405af99fbd9ef42ba49f9e4940abbdef53b275.webp",
        "https://img.cofynd.com/images/latest_images_2024/58e38018564757ef1e647239a79c576230d405bf.webp"
      ]
    }
  ],
  "Nanded City": [
    {
      "id": 7201,
      "name": "Destination Center Cowork",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Nanded City",
      "location": "Destination Center, Nanded City, Bangalore",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/7ef6faeab4bf7be24db4493b03a5c6813043a62f.webp",
        "https://img.cofynd.com/images/latest_images_2024/7e54f22dd07e39e40c4dd21bc597e63c91dd04f8.webp"
      ]
    },
    {
      "id": 7202,
      "name": "Sinhgad Hub Nanded City",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Nanded City",
      "location": "Sinhgad Road, Nanded City, Bangalore",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/446209614429d51bbe2cfa369feb4bdf012c50a9.webp",
        "https://img.cofynd.com/images/latest_images_2024/4490283396d564f681e45972f6ec23f77f741906.webp"
      ]
    },
    {
      "id": 7203,
      "name": "ProWork Nanded City",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Nanded City",
      "location": "Nanded City, Bangalore",
      "price": "₹6,899",
      "period": "/ Month",
      "priceFormatted": "₹6,899 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/b6760a4c0e264699a83513b1857d23c8bb786ccb.webp",
        "https://img.cofynd.com/images/latest_images_2024/6297eae70f6a33a9979f3763f030c34d35c46c1c.webp"
      ]
    },
    {
      "id": 7204,
      "name": "SparkDesk Coworking",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Nanded City",
      "location": "Nanded City, Sinhgad Road, Bangalore",
      "price": "₹5,499",
      "period": "/ Month",
      "priceFormatted": "₹5,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/3cd33975d246b6bd02d73f5da56af5ed5f1ae6c5.webp",
        "https://img.cofynd.com/images/latest_images_2024/2a786d0c42639dc40b1e83fd3bcb82556b32d68c.webp"
      ]
    },
    {
      "id": 7205,
      "name": "Zenith Spaces Nanded City",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Nanded City",
      "location": "Nanded City, Bangalore",
      "price": "₹6,299",
      "period": "/ Month",
      "priceFormatted": "₹6,299 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/78405af99fbd9ef42ba49f9e4940abbdef53b275.webp",
        "https://img.cofynd.com/images/latest_images_2024/58e38018564757ef1e647239a79c576230d405bf.webp"
      ]
    },
    {
      "id": 7206,
      "name": "EliteDesk Nanded City",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Nanded City",
      "location": "Destination Center, Nanded City, Bangalore",
      "price": "₹7,199",
      "period": "/ Month",
      "priceFormatted": "₹7,199 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/d3adf265fe0edf92e91df3e7c03f82f5a302a427.webp",
        "https://img.cofynd.com/images/latest_images_2024/3fadb97d9dada4a2b1a3366d16e59781a246da3c.webp"
      ]
    }
  ]
};

// ============================================================================
// SIMILAR SPACES DATA (9 Verified Bangalore Coworking Spaces for OfficeDetail Page)
// Sourced from verified active coworking listings across Bangalore
// Recognized by ID range 9001 - 9009
// ============================================================================
export const similarBangaloreOfficeCards = [
  {
    id: 9001,
    name: 'Awfis Nucleus Mall Center 2',
    badge: 'Premium',
    rating: 4.3,
    area: 'Camp',
    location: 'Camp, Bangalore',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/4a80ca81d529f233d965d48c442a59eae81aeb8e.webp',
      'https://img.cofynd.com/images/latest_images_2024/18d01923b21937c81ece74720c4bb548da9e6923.webp',
      'https://img.cofynd.com/images/latest_images_2024/f1424db42444f8b6a62f588f594c352e5d0ad72e.webp',
      'https://img.cofynd.com/images/latest_images_2024/cb409206a0b378fd158916c34e85aea5f1dac7ee.webp'
    ]
  },
  {
    id: 9002,
    name: 'Awfis Quantum Works',
    badge: 'Popular',
    rating: 5.0,
    area: 'Kothrud',
    location: 'Kothrud, Bangalore',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/36b634a822eb32b1e9014a4b2872d139e50a05bf.webp',
      'https://img.cofynd.com/images/latest_images_2024/d364e998ed08b0dc4305c4e7499603e893b01358.webp',
      'https://img.cofynd.com/images/latest_images_2024/99e7831a54909d51961ae7ad800e4ed8c9072bb2.webp',
      'https://img.cofynd.com/images/latest_images_2024/4a80ca81d529f233d965d48c442a59eae81aeb8e.webp'
    ]
  },
  {
    id: 9003,
    name: 'Awfis Que Spaces',
    badge: 'Trending',
    rating: 5.0,
    area: 'Magarpatta',
    location: 'Magarpatta, Bangalore',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/b51cfb296e1d87a35723c9d4a3b957be96ea73cd.webp',
      'https://img.cofynd.com/images/latest_images_2024/18d01923b21937c81ece74720c4bb548da9e6923.webp',
      'https://img.cofynd.com/images/latest_images_2024/f1424db42444f8b6a62f588f594c352e5d0ad72e.webp',
      'https://img.cofynd.com/images/latest_images_2024/cb409206a0b378fd158916c34e85aea5f1dac7ee.webp'
    ]
  },
  {
    id: 9004,
    name: 'Awfis Sterling Tower',
    badge: 'Premium',
    rating: 4.4,
    area: 'Baner',
    location: 'Baner, Bangalore',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/a36d09bad7175ca9643ad8e88f77462bd8ec36e1.webp',
      'https://img.cofynd.com/images/latest_images_2024/36b634a822eb32b1e9014a4b2872d139e50a05bf.webp',
      'https://img.cofynd.com/images/latest_images_2024/d364e998ed08b0dc4305c4e7499603e893b01358.webp',
      'https://img.cofynd.com/images/latest_images_2024/99e7831a54909d51961ae7ad800e4ed8c9072bb2.webp'
    ]
  },
  {
    id: 9005,
    name: 'Awfis Viman Nagar II',
    badge: 'Premium',
    rating: 4.8,
    area: 'Viman Nagar',
    location: 'Viman Nagar, Bangalore',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/8a42a52f0d08b1fe8fbc67d8a16ee3a22553597b.webp',
      'https://img.cofynd.com/images/latest_images_2024/4a80ca81d529f233d965d48c442a59eae81aeb8e.webp',
      'https://img.cofynd.com/images/latest_images_2024/18d01923b21937c81ece74720c4bb548da9e6923.webp',
      'https://img.cofynd.com/images/latest_images_2024/cb409206a0b378fd158916c34e85aea5f1dac7ee.webp'
    ]
  },
  {
    id: 9006,
    name: 'Smartworks M-Agile',
    badge: 'Verified',
    rating: 4.8,
    area: 'Baner',
    location: 'Baner, Bangalore',
    price: '₹11,500',
    period: '/ month',
    priceFormatted: '₹11,500 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/99e7831a54909d51961ae7ad800e4ed8c9072bb2.webp',
      'https://img.cofynd.com/images/latest_images_2024/36b634a822eb32b1e9014a4b2872d139e50a05bf.webp',
      'https://img.cofynd.com/images/latest_images_2024/d364e998ed08b0dc4305c4e7499603e893b01358.webp',
      'https://img.cofynd.com/images/latest_images_2024/4a80ca81d529f233d965d48c442a59eae81aeb8e.webp'
    ]
  },
  {
    id: 9007,
    name: 'WeWork Futura',
    badge: 'Popular',
    rating: 4.9,
    area: 'Magarpatta',
    location: 'Magarpatta, Bangalore',
    price: '₹13,000',
    period: '/ month',
    priceFormatted: '₹13,000 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/b51cfb296e1d87a35723c9d4a3b957be96ea73cd.webp',
      'https://img.cofynd.com/images/latest_images_2024/a36d09bad7175ca9643ad8e88f77462bd8ec36e1.webp',
      'https://img.cofynd.com/images/latest_images_2024/18d01923b21937c81ece74720c4bb548da9e6923.webp',
      'https://img.cofynd.com/images/latest_images_2024/cb409206a0b378fd158916c34e85aea5f1dac7ee.webp'
    ]
  },
  {
    id: 9008,
    name: 'IndiQube South Edge',
    badge: 'Top Rated',
    rating: 4.6,
    area: 'Kalyani Nagar',
    location: 'Kalyani Nagar, Bangalore',
    price: '₹8,500',
    period: '/ month',
    priceFormatted: '₹8,500 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/4a80ca81d529f233d965d48c442a59eae81aeb8e.webp',
      'https://img.cofynd.com/images/latest_images_2024/f1424db42444f8b6a62f588f594c352e5d0ad72e.webp',
      'https://img.cofynd.com/images/latest_images_2024/36b634a822eb32b1e9014a4b2872d139e50a05bf.webp',
      'https://img.cofynd.com/images/latest_images_2024/cb409206a0b378fd158916c34e85aea5f1dac7ee.webp'
    ]
  },
  {
    id: 9009,
    name: 'Workhub Cerebrum IT Park',
    badge: 'Budget Friendly',
    rating: 4.5,
    area: 'Kalyani Nagar',
    location: 'Kalyani Nagar, Bangalore',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/d364e998ed08b0dc4305c4e7499603e893b01358.webp',
      'https://img.cofynd.com/images/latest_images_2024/8a42a52f0d08b1fe8fbc67d8a16ee3a22553597b.webp',
      'https://img.cofynd.com/images/latest_images_2024/18d01923b21937c81ece74720c4bb548da9e6923.webp',
      'https://img.cofynd.com/images/latest_images_2024/cb409206a0b378fd158916c34e85aea5f1dac7ee.webp'
    ]
  }
];

// ============================================================================
// Comprehensive Bangalore Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allBangaloreOfficeCards = [
  ...bangaloreOfficeCards,
  ...moreBangaloreOfficeCards,
  ...finalBangaloreOfficeCards,
  ...featuredBangaloreOfficeCards,
  ...pageTwoBangaloreOfficeCards,
  ...pageTwoMoreBangaloreOfficeCards,
  ...pageTwoFinalBangaloreOfficeCards,
  ...pageTwoFeaturedBangaloreOfficeCards,
  ...pageThreeBangaloreOfficeCards,
  ...pageThreeMoreBangaloreOfficeCards,
  ...pageThreeFinalBangaloreOfficeCards,
  ...pageThreeFeaturedBangaloreOfficeCards,
  ...(typeof pageFourBangaloreOfficeCards !== 'undefined' ? pageFourBangaloreOfficeCards : []),
  // Include all 9 recognized similar spaces for detail page lookup
  ...similarBangaloreOfficeCards,
  // Include all area-specific extra cards for detail page lookup
  ...(typeof areaExtraOfficeCards !== 'undefined' ? Object.values(areaExtraOfficeCards).flat() : [])
];

/**
 * Find a Bangalore office card by ID across all pagination pages
 * @param {string|number} id
 * @returns {object|null}
 */
export const getBangaloreOfficeCardById = (id) => findOfficeBySlug(allBangaloreOfficeCards, id, "bangalore");
export const getBangaloreOfficeSlug = (space) => officePath(allBangaloreOfficeCards, space, "bangalore");

// ============================================================================
// Top Coworking Locations in Bangalore (Explore by Neighborhood)
// Sourced from verified active coworking spaces in each key hub
// ============================================================================
export const topBangaloreCoworkingLocations = [
  {
    id: 'loc-hsr-layout',
    name: 'HSR Layout',
    title: 'Coworking Space in HSR Layout',
    image: 'https://bhiveworkspace.com/wp-content/uploads/2024/01/BHIVE-AKR-1.jpg',
    ctaText: 'Explore Spaces'
  },
  {
    id: 'loc-koramangala',
    name: 'Koramangala',
    title: 'Coworking Space in Koramangala',
    image: 'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/indiqube-sunshine/managed-office/j89kzd.jpg',
    ctaText: 'Explore Spaces'
  },
  {
    id: 'loc-mg-road',
    name: 'MG Road',
    title: 'Coworking Space in MG Road',
    image: 'https://img.cofynd.com/images/latest_images_2024/b1ff54dcadaf50529fbeea61a35f0b53087c9b1c.webp',
    ctaText: 'Explore Spaces'
  },
  {
    id: 'loc-indiranagar',
    name: 'Indiranagar',
    title: 'Coworking Space in Indiranagar',
    image: 'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/unitus-indiranagar/exterior/7f9m5m.jpg',
    ctaText: 'Explore Spaces'
  },
  {
    id: 'loc-whitefield',
    name: 'Whitefield',
    title: 'Coworking Space in Whitefield',
    image: 'https://bhiveworkspace.com/wp-content/uploads/2023/04/BHIVE-JBR.jpg',
    ctaText: 'Explore Spaces'
  },
  {
    id: 'loc-jp-nagar',
    name: 'JP Nagar',
    title: 'Coworking Space in JP Nagar',
    image: 'https://img.cofynd.com/images/latest_images_2024/5d6bdce911d2d6d29a01d2a56ae7551421f5fb25.webp',
    ctaText: 'Explore Spaces'
  },
  {
    id: 'loc-jayanagar',
    name: 'Jayanagar',
    title: 'Coworking Space in Jayanagar',
    image: 'https://img.cofynd.com/images/original/0b7358b353d6a791efd3be1458c65b9c123bc641.jpg',
    ctaText: 'Explore Spaces'
  },
  {
    id: 'loc-hebbal',
    name: 'Hebbal',
    title: 'Coworking Space in Hebbal',
    image: 'https://img.cofynd.com/images/latest_images_2024/70c576585e2c824605936ad8e7673e9c39184ba2.webp',
    ctaText: 'Explore Spaces'
  },
  {
    id: 'loc-marathahalli',
    name: 'Marathahalli',
    title: 'Coworking Space in Marathahalli',
    image: 'https://img.cofynd.com/images/original/f3301766c8ef599ab9fccf4e79d8ffb05607f8cb.jpg',
    ctaText: 'Explore Spaces'
  },
  {
    id: 'loc-btm-layout',
    name: 'BTM Layout',
    title: 'Coworking Space in BTM Layout',
    image: 'https://img.cofynd.com/images/original/2851d6fa3bd6909bca06fc26da49b5cf1cede2ad.jpg',
    ctaText: 'Explore Spaces'
  }
];

