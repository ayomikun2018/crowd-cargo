import { RouteEnums } from "@/constants/route-urls";

export const dashboardConfig = {
  sidebarNav: [
    {
      title: null,
      items: [
        {
          title: "Add Product",
          href: RouteEnums.ADD_PRODUCT,
          icon: "Category",
        },
      ],
    },
    {
      title: "ORDERS",
      items: [
        { title: "Orders", href: RouteEnums.ADD_ORDERS, icon: "People" },
        { title: "Deliveries", href: "", icon: "Buy" },
      ],
    },
    {
      title: "PRODUCTS",
      items: [
        { title: "Inventory", href: "", icon: "PaperUpload" },
        { title: "Discount", href: "", icon: "Discount" },
        { title: "Logout", href: "/login", icon: "Logout" },
      ],
    },
  ],
};
