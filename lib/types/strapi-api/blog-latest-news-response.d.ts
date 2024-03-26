/* 
NOTE: Demo Response; 
curl --request GET \
  --url 'https://admin.nexbridge.ch/api/blogs?fields%5B0%5D=createdAt&fields%5B1%5D=title&populate%5Bthumbnail%5D%5Bfields%5D%5B2%5D=url&fields%5B4%5D=slug&fields%5B5%5D=uid&sort=createdAt%3Aasc&pagination%5Bpage%5D=1&pagination%5Bpagesize%5D=3'
*/
const response = {
  data: [
    {
      id: 1,
      attributes: {
        createdAt: "2024-03-20T18:36:43.508Z",
        title: "Test Blog in Production",
        slug: "blogs-for-test-production",
        uid: "J-oFpLuphITWl-D9sUHNJ_FGdVpvUn527oqKMIKwKWRvkjAPlgAwI-8NCOqE",
        thumbnail: {
          data: {
            id: 2,
            attributes: {
              url: "/uploads/https_dev_to_uploads_s3_amazonaws_com_uploads_articles_cjqj3goouosj4cmx85c6_dd850c75cc.jpg",
            },
          },
        },
        createdBy: {
          id: 1,
          firstname: "Nexbridge",
          lastname: "Admin",
        },
      },
    },
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 4,
    },
  },
};

export type TBlogLatestNewsResponse = typeof response;
