import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import ShoppingCartItem from "../components/ShoppingCartItem.vue";
import AuthLayout from "../components/AuthLayout.vue";
import PCBuilderComponentCard from "../components/PCBuilderComponentCard.vue";
import ProductDetailsPage from "../views/ProductDetailsPage.vue";
import PaymentDetailsPage from "../views/PaymentDetailsPage.vue";
import Homepage from "../views/Homepage.vue";
import Contact from "../views/Contact.vue";
import AllProducts from "../views/AllProducts.vue";
import ProductImagesComponent from "../components/ProductImagesCarousel.vue";
import MyOrdersPage from "../views/MyOrdersPage.vue";
import PCBuilder from "../views/PCBuilder.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: Homepage,
  },

  {
    path: "/kontakt",
    name: "ContactPage",
    component: Contact,
  },

  {
    path: "/proizvodi",
    name: "ProductsPage",
    component: AllProducts,
  },
  {
    path: "/:productable_type/:id",
    name: "ProductDetails",
    component: ProductDetailsPage,
  },
  {
    path: "/pc-builder",
    name: "PCBuilderPage",
    component: PCBuilder,
  },
  {
    path: "/payment-details",
    name: "PaymentDetails",
    component: PaymentDetailsPage,
  },
  {
    path: "/my-orders",
    name: "MyOrders",
    component: MyOrdersPage,
  },
  {
    path: "/cart",
    name: "Cart",
    component: ShoppingCartItem,
    props: {
      item: {
        manufacturer: "Gigabyte",
        model:
          "GeForce GTX 1080 GeForce GTX 1080 GeForce GTX 1080 GeForce GTX 1080",
        memory: "32 GB",
        price: "1499.99",
        img: "https://www.pngmart.com/files/7/Graphics-Card-Transparent-Background.png",
      },
    },
  },
  {
    path: "/auth",
    name: "AuthLayout",
    redirect: "/login",
    component: AuthLayout,
    meta: { isGuest: true },
    children: [
      { path: "/login", name: "LoginPage", component: LoginPage },
      { path: "/register", name: "RegisterPage", component: RegisterPage },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
