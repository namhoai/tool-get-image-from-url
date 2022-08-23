const request = require("request");
const fs = require("fs");

const products = [
  {
    name: "Áo polo kẻ ngang 2.DSTP630",
    code: "DSTP63072CV08SB",
    color: ["Trắng", "Xanh navy"],
    size: ["S", "M", "L", "XL"],
    images: [
      "https://img.cdn.vncdn.io/nvn/ncdn/store/2071/ps/20220815/web_TP630.png",
      "https://img.cdn.vncdn.io/nvn/ncdn/store/2071/ps/20220809/52254911906_9599c69f66_c.jpg",
      "https://img.cdn.vncdn.io/nvn/ncdn/store/2071/ps/20220815/52255198219_844318a7a4_c.jpg",
      "https://img.cdn.vncdn.io/nvn/ncdn/store/2071/ps/20220809/52255198414_c6618d97f0_c.jpg",
      "https://img.cdn.vncdn.io/nvn/ncdn/store/2071/ps/20220809/52254933683_e704761421_c.jpg",
      "https://img.cdn.vncdn.io/nvn/ncdn/store/2071/ps/20220809/52254912491_b1e10b28a3_c.jpg",
      "https://img.cdn.vncdn.io/nvn/ncdn/store/2071/ps/20220815/52253946437_f1cd071daf_c.jpg",
    ],
  },
  {
    name: "Áo polo kẻ ngang 1.DSTP213",
    code: "DSTP21372CX08SB",
    color: ["Xanh navy"],
    size: ["S", "M", "L", "XL"],
    images: [
      "https://img.cdn.vncdn.io/nvn/ncdn/store/2071/ps/20220713/52209610822_4fecc13c2d_c.jpg",
      "https://img.cdn.vncdn.io/nvn/ncdn/store/2071/ps/20220616/tp213.jpg",
      "https://img.cdn.vncdn.io/nvn/ncdn/store/2071/ps/20220616/52141161472_37bf3a4a91_c.jpg",
      "https://img.cdn.vncdn.io/nvn/ncdn/store/2071/ps/20220616/52141161447_3bbf3c5f17_c.jpg",
      "https://img.cdn.vncdn.io/nvn/ncdn/store/2071/ps/20220616/52142202348_e93544e315_c.jpg",
      "https://img.cdn.vncdn.io/nvn/ncdn/store/2071/ps/20220616/52142670710_87b19030d5_c.jpg",
      "https://img.cdn.vncdn.io/nvn/ncdn/store/2071/ps/20220616/52141161192_b5ef3cabdc_c.jpg",
      "https://img.cdn.vncdn.io/nvn/ncdn/store/2071/ps/20220713/52209610872_ff6762a1c3_k.jpg",
    ],
  },
  {
    name: "Áo Polo phối kẻ 1.TP008",
    code: "DSTP00872CX08SB",
    color: ["Trắng"],
    size: ["S", "M", "L", "XL"],
    images: [
      "https://img.cdn.vncdn.io/nvn/ncdn/store/2071/ps/20220615/tp008.jpg",
      "https://img.cdn.vncdn.io/nvn/ncdn/store/2071/ps/20220615/52135182493_03295b18d8_c.jpg",
      "https://img.cdn.vncdn.io/nvn/ncdn/store/2071/ps/20220615/52135400369_87e6617a76_c.jpg",
      "https://img.cdn.vncdn.io/nvn/ncdn/store/2071/ps/20220615/52135162501_be5a3f4435_c.jpg",
      "https://img.cdn.vncdn.io/nvn/ncdn/store/2071/ps/20220615/52135400549_9bc2fa9c3a_c.jpg",
    ],
  },
];

products.forEach((item) => {
  const nameFolder = item.name;

  const dir = `images/${nameFolder}`

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  item.images.forEach((itemImage, index) => {
    request
      .get(itemImage)
      .on("error", function (err) {
        console.log(err);
      })
      .on("response", function (response) {
        if (response.statusCode == 200) {
          console.log("successfully retreived image from url");
        }
      })
      .pipe(fs.createWriteStream(`images/${nameFolder}/${index}.png`));
  });
});
