import mangoVideo from "../assets/videos/mango.mp4";
import chocolateVideo from "../assets/videos/chocolate.mp4";
import coconutVideo from "../assets/videos/coconut.mp4";
import strawberryVideo from "../assets/videos/strawberry.mp4";
import chiku from "../assets/flavour/chiku.png";
import strawberry from "../assets/flavour/strawberry.png";
import blueberry from "../assets/flavour/blueberry.png";
import raspberry from "../assets/flavour/raspberry.png";
import blackberry from "../assets/flavour/blackberry.png";
import guava from "../assets/flavour/guava.png";
import mango from "../assets/flavour/mango.png";
import orange from "../assets/flavour/orange.png";
import pineapple from "../assets/flavour/pineapple.png";
import apple from "../assets/flavour/apple.png";
import banana from "../assets/flavour/banana.png";
import papaya from "../assets/flavour/papaya.png";
import watermelon from "../assets/flavour/watermelon.png";
import litchi from "../assets/flavour/litchi.png";
import jamun from "../assets/flavour/jamun.png";
import kiwi from "../assets/flavour/kiwi.png";
import graps from "../assets/flavour/graps.png";
import muskmelon from "../assets/flavour/muskmelon.png";
import anar from "../assets/flavour/anar.png";
import mosambi from "../assets/flavour/mosambi.png";
import amla from "../assets/flavour/amla.png";
import peach from "../assets/flavour/peach.png";
import pear from "../assets/flavour/pear.png";
import dragonfruit from "../assets/flavour/dragonfruit.png";
import chocolate from "../assets/flavour/chocolate.png";
import darkchocolate from "../assets/flavour/darkchocolate.png";
import whitechocolate from "../assets/flavour/whitechocolate.png";
import butterscotch from "../assets/flavour/butterscotch.png";
import caremal from "../assets/flavour/caremal.png";
import vanila from "../assets/flavour/vanila.png";
import rose from "../assets/flavour/rose.png";
import kesar from "../assets/flavour/kesar.png";
import paan from "../assets/flavour/paan.png";
import rabdi from "../assets/flavour/rabdi.png";
import kulfi from "../assets/flavour/kulfi.png";
import badam from "../assets/flavour/badam.png";
import pistachio from "../assets/flavour/pistachio.png";
import coconut from "../assets/flavour/coconut.png";
import coffee from "../assets/flavour/coffee.png";
import imli from "../assets/flavour/imli.png";
import kalakhatta from "../assets/flavour/kalakhatta.png";
import kachhikeri from "../assets/flavour/kachikeri.png";
import lemon from "../assets/flavour/lemon.png";
import mint from "../assets/flavour/mint.png";
import jeera from "../assets/flavour/jeera.png";
import ginger from "../assets/flavour/ginger.png";
import cola from "../assets/flavour/cola.png";
import flasa from "../assets/flavour/falsa.png";
import khas from "../assets/flavour/khas.png";
import rajbhog from "../assets/flavour/rajbhog.png";

export type FlavorCategory = "Fruit Flavours" | "Sweet & Dessert" | "Traditional & Tangy";

export interface Flavor {
  name: string;
  category: FlavorCategory;
  color: string;
  textColor?: string;
  description: string;
  image: string;
}

export interface popularFlavors {
  name: string;
  video: string;
}

export const flavors: Flavor[] = [
  // Fruit Flavours
  // Fruit Flavours
  { name: "Chiku", category: "Fruit Flavours", color: "bg-amber-200", description: "Rich, creamy sapodilla sweetness in every drop.", image: chiku},
  { name: "Dragon Fruit", category: "Fruit Flavours", color: "bg-fuchsia-200", description: "Exotic dragonfruit with a vibrant tropical flair.", image: dragonfruit },
  { name: "Strawberry", category: "Fruit Flavours", color: "bg-pink-200", description: "Fresh berry burst with a sweet tangy finish.", image: strawberry},
  { name: "Blueberry", category: "Fruit Flavours", color: "bg-indigo-200", description: "Deep berry richness with a cool, smooth taste.", image: blueberry},
  { name: "Guava", category: "Fruit Flavours", color: "bg-emerald-200", description: "Tropical guava punch, refreshingly aromatic.", image: guava},
  { name: "Grapes", category: "Fruit Flavours", color: "bg-purple-200", description: "Juicy grape burst with a wine like richness.", image: graps},
  { name: "Orange", category: "Fruit Flavours", color: "bg-orange-200", description: "Zesty citrus delight, bright and refreshing.", image: orange},
  { name: "Mango", category: "Fruit Flavours", color: "bg-yellow-200", description: "King of fruits golden, sweet, irresistible.", image: mango},
  { name: "Apple", category: "Fruit Flavours", color: "bg-red-200", description: "Crisp apple freshness, naturally delightful.", image: apple},
  { name: "Blackberry", category: "Fruit Flavours", color: "bg-purple-200", description: "Dark, luscious berry goodness in every sip.", image: blackberry},
  { name: "Pineapple", category: "Fruit Flavours", color: "bg-yellow-200", description: "Tangy tropical sweetness with a juicy kick.", image: pineapple},
  { name: "Kiwi", category: "Fruit Flavours", color: "bg-lime-200", description: "Vibrant green kiwi, tangy and tropical.", image: kiwi},
  { name: "Papaya", category: "Fruit Flavours", color: "bg-orange-200", description: "Soft tropical papaya, mellow and sweet.", image: papaya},
  { name: "Watermelon", category: "Fruit Flavours", color: "bg-red-200", description: "Cool, juicy watermelon summer in a bottle.", image: watermelon},
  { name: "Muskmelon", category: "Fruit Flavours", color: "bg-orange-200", description: "Light, fragrant melon with a honeyed touch.", image: muskmelon},
  { name: "Litchi", category: "Fruit Flavours", color: "bg-rose-200", description: "Delicate floral litchi, sweet and aromatic.", image: litchi},
  { name: "Jamun", category: "Fruit Flavours", color: "bg-violet-200", description: "Deep purple jamun, earthy and refreshing.", image: jamun},
  { name: "Raspberry", category: "Fruit Flavours", color: "bg-pink-200", description: "Bold tart berry flavor, perfectly balanced.", image: raspberry},
  { name: "Banana", category: "Fruit Flavours", color: "bg-yellow-200", description: "Smooth, creamy banana bliss in liquid form.", image: banana},
  { name: "Anar", category: "Fruit Flavours", color: "bg-red-200", description: "Classic anar flavor, sweet and nostalgic.", image: anar},
  { name: "Mosambi", category: "Fruit Flavours", color: "bg-lime-200", description: "Mild citrus mosambi, light and soothing.", image: mosambi},
  { name: "Amla", category: "Fruit Flavours", color: "bg-green-200", description: "Tangy Indian gooseberry with a vitamin kick.", image: amla},
  { name: "Peach", category: "Fruit Flavours", color: "bg-orange-200", description: "Soft, velvety peach with a sunny sweetness.", image: peach},
  { name: "Pear", category: "Fruit Flavours", color: "bg-lime-200", description: "Gentle pear sweetness, smooth and subtle.", image: pear},

  // Sweet & Dessert
  { name: "Chocolate", category: "Sweet & Dessert", color: "bg-amber-200", description: "Classic chocolate indulgence, rich and velvety.", image: chocolate},
  { name: "Dark Chocolate", category: "Sweet & Dessert", color: "bg-stone-200", description: "Intense dark cocoa with a bittersweet edge.", image: darkchocolate},
  { name: "White Chocolate", category: "Sweet & Dessert", color: "bg-slate-50", description: "Creamy white chocolate, smooth and milky.", image: whitechocolate},
  { name: "Butterscotch", category: "Sweet & Dessert", color: "bg-amber-200", description: "Buttery caramel crunch, sweet and golden.", image: butterscotch},
  { name: "Caramel", category: "Sweet & Dessert", color: "bg-orange-200", description: "Warm golden caramel, irresistibly smooth.", image: caremal},
  { name: "Vanilla", category: "Sweet & Dessert", color: "bg-orange-50", description: "Timeless vanilla bean, pure and aromatic.", image: vanila},
  { name: "Rose", category: "Sweet & Dessert", color: "bg-pink-200", description: "Fragrant rose petals in every sweet sip.", image: rose},
  { name: "Kesar", category: "Sweet & Dessert", color: "bg-yellow-200", description: "Royal saffron richness, luxurious and warm.", image: kesar},
  { name: "Paan", category: "Sweet & Dessert", color: "bg-green-200", description: "Traditional meetha paan, fresh and aromatic.", image: paan},
  { name: "Rabdi", category: "Sweet & Dessert", color: "bg-yellow-100", description: "Thick, creamy rabdi, a desi delight.", image: rabdi},
  { name: "Kulfi", category: "Sweet & Dessert", color: "bg-amber-100", description: "Classic Indian kulfi, dense and dreamy.", image: kulfi},
  { name: "Badam", category: "Sweet & Dessert", color: "bg-orange-200", description: "Nutty almond richness with a milky warmth.", image: badam},
  { name: "Pistachio", category: "Sweet & Dessert", color: "bg-lime-200", description: "Premium pista flavor, earthy and sweet.", image: pistachio},
  { name: "Coconut", category: "Sweet & Dessert", color: "bg-stone-50", description: "Tropical coconut bliss, creamy and fresh.", image: coconut},
  { name: "Coffee", category: "Sweet & Dessert", color: "bg-stone-200", description: "Bold roasted coffee with a smooth finish.", image: coffee},

  // Traditional & Tangy
  { name: "Imli", category: "Traditional & Tangy", color: "bg-amber-200", description: "Tangy tamarind kick, bold and chatpata.", image: imli},
  { name: "Kala Khatta", category: "Traditional & Tangy", color: "bg-slate-200", description: "Iconic dark tangy flavor, a street-food legend.", image: kalakhatta},
  { name: "Kacchi Keri", category: "Traditional & Tangy", color: "bg-lime-200", description: "Raw mango zing, sour and utterly refreshing.", image: kachhikeri},
  { name: "Lemon", category: "Traditional & Tangy", color: "bg-yellow-200", description: "Sharp citrus lemon, crisp and energizing.", image: lemon},
  { name: "Mint", category: "Traditional & Tangy", color: "bg-emerald-200", description: "Cool minty freshness, pure and invigorating.", image: mint},
  { name: "Jeera", category: "Traditional & Tangy", color: "bg-orange-200", description: "Earthy roasted cumin with a tangy twist.", image: jeera},
  { name: "Ginger", category: "Traditional & Tangy", color: "bg-amber-200", description: "Spicy ginger warmth with a zesty punch.", image: ginger},
  { name: "Cola", category: "Traditional & Tangy", color: "bg-red-250", description: "Classic cola taste, dark and bubbly.", image: cola},
  { name: "Falsa", category: "Traditional & Tangy", color: "bg-purple-200", description: "Sweet-sour falsa berry, a summer favorite.", image: flasa},
  { name: "Khas", category: "Traditional & Tangy", color: "bg-green-200", description: "Earthy vetiver coolness, naturally refreshing.", image: khas},
  { name: "Rajbhog", category: "Traditional & Tangy", color: "bg-amber-200", description: "Saffron-kissed rajbhog, festive and royal.", image: rajbhog},

];

export const categories: FlavorCategory[] = [
  "Fruit Flavours",
  "Sweet & Dessert",
  "Traditional & Tangy",
];

export const popularFlavors = [
  { name: "Mango", video: mangoVideo },
  { name: "Chocolate", video: chocolateVideo },
  { name: "Coconut", video: coconutVideo },
  { name: "Strawberry", video: strawberryVideo },
];
