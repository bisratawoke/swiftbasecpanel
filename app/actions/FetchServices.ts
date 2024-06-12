"use server";

[
  { title: "Web Development" },
  { title: "Graphic Design" },
  { title: "SEO" },
  { title: "Content Writing" },
  { title: "Digital Marketing" },
  // Add more services as needed
];
export async function FetchService() {
  return [
    { title: "Static Content Hosting" },
    { title: "Serverless Functions" },
    { title: "Nosql database" },
  ];
}
