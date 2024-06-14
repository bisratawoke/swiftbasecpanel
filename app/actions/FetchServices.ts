"use server";

export async function FetchService() {
  return [
    { id: "1", title: "Static Content Hosting" },
    { id: "2", title: "Serverless Functions" },
    { id: "3", title: "Nosql database" },
  ];
}
