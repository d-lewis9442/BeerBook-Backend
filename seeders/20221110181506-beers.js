'use strict'

const { query } = require('express')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('beers', [
      {
        name: 'Rainbow Sherbet',
        style: 'Sour Ale',
        abv: 5.2,
        brewery: 'Prairie Artisan Ales',
        image:
          'https://craftpeak-cooler-images.imgix.net/prairie-artisan-ales/Rainbow.png?auto=compress%2Cformat&fit=scale&h=1024&ixlib=php-3.3.0&w=1024&wpsize=large&s=4f66ee6e08de63b74f819099e8bcc995',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Voodoo Ranger Juicy Haze IPA',
        style: 'IPA',
        abv: 7.5,
        brewery: 'New Belguim Brewing Company',
        image:
          'https://www.newbelgium.com/siteassets/beer/voodoo-ranger-juicy-haze/new-vrajh_pint_can_1440.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hazy Little Thing IPA',
        style: 'IPA',
        abv: 6.7,
        brewery: 'Sierra Nevada Brewing Company',
        image:
          'https://sierranevada.com/wp-content/themes/mx-theme//assets/lt-assets/images/hazy-can.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'DDH IPA Series 26',
        style: 'Double Dry-Hopped IPA',
        abv: 7.2,
        brewery: 'Tupps Brewery',
        image:
          'https://tuppsbrewery.com/wp-content/uploads/2020/12/DDH-IPA26-SOLO-can.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Modelo Especial',
        style: 'Pilsner',
        abv: 4.4,
        brewery: 'Casa Modelo',
        image:
          'https://cdn.shopify.com/s/files/1/0605/9520/8383/files/ME_HomePage_CarslBlock_1_1024x1024.png?v=1637656005',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Boomsauce',
        style: 'Douple IPA',
        abv: 7.8,
        brewery: 'Lord Hobo Brewing Company',
        image:
          'https://lordhobo.s3.amazonaws.com/wp-content/uploads/2021/05/22230304/BOOMSAUCE.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Space Dust IPA',
        style: 'IPA',
        abv: 8.2,
        brewery: 'Elysian Brewing Company',
        image:
          'https://www.elysianbrewing.com/sites/default/files/styles/large/public/2021-05/EBRW_12ozSpaceDustIPA_Innershadow.png?itok=vliChGEV',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chomolungma',
        style: 'Brown Ale',
        abv: 6.5,
        brewery: 'Jackie Os Brewery',
        image:
          'https://craftpeak-cooler-images.imgix.net/jackie-os-pub-brewery/Chomolungma_Front.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-3.3.0&w=600&wpsize=tile_strict&s=6336625a166cc221a92528735f4b4ec5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Guinness Draught',
        style: 'Stout',
        abv: 4.2,
        brewery: 'Guinness & Co. Brewery',
        image:
          'https://media.diageocms.com/media/mold4yx5/your-guinness-your-way-pint-can-social-still1440.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sea Quench Ale',
        style: 'Sour',
        abv: 4.9,
        brewery: 'Dog Fish Head Brewery',
        image:
          'https://www.dogfish.com/files/media/styles/beer_style/public/beer/SEQ_Edit3.jpg?itok=7AI0N82h',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Athena',
        style: 'Berliner Weisse',
        abv: 4.5,
        brewery: 'Creature Comforts Brewing',
        image:
          'https://creaturecomfortsbeer.com/wp-content/uploads/2020/08/Athena_Can_for_web.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Orval Trappist Ale',
        style: 'Belgian Ale',
        abv: 6.9,
        brewery: 'Orval Brewery',
        image:
          'https://merchantduvin.com/wp-content/uploads/2021/09/Orval_Trappist_Ale_11.2z_085725140019.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mango Cart',
        style: 'Wheat Ale',
        abv: 4,
        brewery: 'Golden Road Brewing',
        image:
          'https://www.goldenroad.la/static/goldenroad_beer-efa03492a8549cec90e11d1e4d851d18.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bud Light',
        style: 'American Lager',
        abv: 4.2,
        brewery: 'Anheuser-Busch',
        image:
          'https://www.budlight.com/content/dam/brand-template/budlight/chelada/BL_Core_Can.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Miller Lite',
        style: 'American Lager',
        abv: 4.2,
        brewery: 'Molson Coors',
        image:
          'https://www.pngfind.com/pngs/m/391-3915922_miller-lite-beer-png-download-miller-lite-transparent.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lucky Buddha Enlightened Beer',
        style: 'Japanese Rice Lager',
        abv: 4.8,
        brewery: 'The Lucky Drink Company',
        image:
          'https://luckydrinkco.com/lucky/wp-content/uploads/2020/03/Lucky.HappyNewYear.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Watermelon Gose',
        style: 'Gose',
        abv: 4.5,
        brewery: 'Terrapin Beer Company',
        image:
          'https://cdn.shopify.com/s/files/1/0249/0905/3998/products/WatermelonGoseCan.jpg?v=1614093556',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'The 87',
        style: 'Hazy Double IPA',
        abv: 8.0,
        brewery: 'Night Shift Brewing',
        image:
          'https://nightshiftbrewing.com/wp-content/uploads/elementor/thumbs/87_verticalspace-e1665078586707-pvtq5x7lwb86q3jvmvniwb4khacbe5fuyuim0row4g.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fluffy',
        style: 'Hazy IPA',
        abv: 7.0,
        brewery: 'Night Shift Brewing',
        image:
          'https://nightshiftbrewing.com/wp-content/uploads/elementor/thumbs/Core-Shot_Fluffy_2021_Wide-e1641240524742-pihgx9ifmd6pa11q4zrye0kqlepy5dyzq2i7qdo1j8.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Consummate Rioter',
        style: 'IPA',
        abv: 7.2,
        brewery: 'Democracy Brewing',
        image:
          'https://bdc2020.o0bc.com/wp-content/uploads/2019/01/fc11cc4e-1dd8-11e9-aac8-de46f5a543dc.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Very Hazy',
        style: 'Double IPA',
        abv: 8.6,
        brewery: 'Tree House Brewing Company',
        image:
          'https://images.squarespace-cdn.com/content/v1/5e7219f88ebaa26f2c4795c0/1597411491931-H97F2UT5WKGWDYO6VVLZ/Very%2BHazy-11.jpg?format=750w',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Double Nandu',
        style: 'Double IPA',
        abv: 8.0,
        brewery: 'Aeronaut Brewing',
        image:
          'https://www.aeronautbrewing.com/wp-content/uploads/2022/10/Double-Nandu.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Big Wave Golden Ale',
        style: 'Blonde Ale',
        abv: 4.4,
        brewery: 'Kona Brewing Co.',
        image:
          'https://konabrewingco.com/uploads/images/beers/_275x350_crop_center-center_75/KO-Big-Wave-Bottlepint-600x830-for-web.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Stone IPA',
        style: 'IPA',
        abv: 6.9,
        brewery: 'Stone Brewing',
        image:
          'https://d3czfiwbzom72b.cloudfront.net/wp-content/uploads/2018/10/76912-STONE-INDIA-PALE-ALE.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Heyday',
        style: 'Modern IPA',
        abv: 5.8,
        brewery: 'Great Divide Brewing Company',
        image:
          'https://greatdivide.com/wp-content/themes/cookie-child/heyday/img/handAndCan.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Escape to Colorado',
        style: 'IPA',
        abv: 6.2,
        brewery: 'Epic Brewing Company',
        image:
          'https://greatdivide.com/wp-content/themes/cookie-child/heyday/img/handAndCan.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fresh Squeezed IPA',
        style: 'IPA',
        abv: 6.4,
        brewery: 'Deschutes Brewery',
        image:
          'https://d1o0i0v5q5lp8h.cloudfront.net/desbre/live/assets/beers/details_image/FSIPA1611108275-49091.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Allgood',
        style: 'Kolsch Style Ale',
        abv: 5.8,
        brewery: 'Oak Highlands Brewery',
        image:
          'https://www.oakhighlandsbrewery.com/wp-content/uploads/2015/04/AllGood-Can.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'The Substance Ale',
        style: 'IPA',
        abv: 6.6,
        brewery: 'Bissel Brothers Brewing',
        image:
          'https://craftpeak-cooler-images.imgix.net/bissell-brothers/CE3A1042.jpg?auto=compress%2Cformat&fit=crop&h=600&ixlib=php-3.3.0&w=600&wpsize=tile_strict&s=f46a10faa2d01ae716ce0ebebbba81f5',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('beers', null, {})
  }
}
