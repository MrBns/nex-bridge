const sampleData = {
  data: {
    id: 1,
    attributes: {
      uid: "wCayZWeHZHFxUuFKL0IySY0hSJHOCQiW2gVQar1ZGgz9ZlHRuX",
      createdAt: "2024-03-22T18:23:57.245Z",
      updatedAt: "2024-03-22T18:24:11.347Z",
      publishedAt: "2024-03-22T18:24:11.339Z",
      blogs: {
        data: [
          {
            id: 2,
            attributes: {
              title: "TEST DPereregsfdsfsdf",
              content: "<p>JESUS IS ALIVE</p>",
              short_description: "erwgfgw",
              summary: null,
              slug: "blog-1",
              createdAt: "2024-03-21T11:17:45.785Z",
              updatedAt: "2024-03-23T04:57:11.876Z",
              locale: "en",
              uid: "uhwAZGfl46DTI0I0P8vACJxKV8lcpLLUKixnF9YwTwHqn8vgcDjzS-0IWGoJ",
              categories: {
                data: [
                  {
                    id: 1,
                    attributes: {
                      Category: "server",
                      createdAt: "2024-03-20T19:02:24.087Z",
                      updatedAt: "2024-03-23T05:03:19.844Z",
                      publishedAt: "2024-03-23T05:03:19.836Z",
                      uid: "5WAK35TASkWxCeatT3RWhTLe83nOVlMaNDCssZo3DuFxpgugWZ",
                    },
                  },
                ],
              },
            },
          },
          {
            id: 1,
            attributes: {
              title: "Test Blog in Production",
              content:
                '<h1>Hostpoint.ch is a<mark class="marker-yellow"> <strong>bullshit</strong></mark><mark class="marker-green"><strong>.</strong></mark>&nbsp;</h1><p>but now hostinger is perfect. sooo much flexible 😉</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>',
              short_description: "what should I say in short description. ?",
              summary: null,
              slug: "blogs-for-test-production",
              createdAt: "2024-03-20T18:36:43.508Z",
              updatedAt: "2024-03-23T05:15:25.683Z",
              locale: "en",
              uid: "J-oFpLuphITWl-D9sUHNJ_FGdVpvUn527oqKMIKwKWRvkjAPlgAwI-8NCOqE",
              categories: {
                data: [
                  {
                    id: 1,
                    attributes: {
                      Category: "server",
                      createdAt: "2024-03-20T19:02:24.087Z",
                      updatedAt: "2024-03-23T05:03:19.844Z",
                      publishedAt: "2024-03-23T05:03:19.836Z",
                      uid: "5WAK35TASkWxCeatT3RWhTLe83nOVlMaNDCssZo3DuFxpgugWZ",
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    },
  },
  meta: {},
};

export type BlogSliderResponse = typeof sampleData;
