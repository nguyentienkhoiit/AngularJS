var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "pages/product-list.html",
      controller: "ProductListController",
    })
    .when("/about", {
      templateUrl: "pages/about.html",
    })
    .when("/contact", {
      templateUrl: "pages/contact.html",
    })
    .when("/product/:id", {
      templateUrl: "pages/product-detail.html",
      controller: "ProductListController",
    });
});

app.controller("ProductListController", function ($scope, $routeParams) {
  $scope.products = [
    {
        id: 1,
        name: "Product 1",
        price: 100,
        image: "https://picsum.photos/300/300",
        salePrice: 120,
        description: "Description 1",
        url: "#!/product/1",
      },
      {
        id: 2,
        name: "Product 2",
        price: 120,
        image: "https://picsum.photos/300/300",
        salePrice: 140,
        description: "Description 2",
        url: "#!/product/2",
      },
      {
        id: 3,
        name: "Product 3",
        price: 90,
        image: "https://picsum.photos/300/300",
        salePrice: 110,
        description: "Description 3",
        url: "#!/product/3",
      },
      {
        id: 4,
        name: "Product 4",
        price: 110,
        image: "https://picsum.photos/300/300",
        salePrice: 160,
        description: "Description 4",
        url: "#!/product/4",
      },
      {
        id: 5,
        name: "Product 5",
        price: 130,
        image: "https://picsum.photos/300/300",
        salePrice: 170,
        description: "Description 5",
        url: "#!/product/5",
      },
      {
        id: 6,
        name: "Product 6",
        price: 140,
        image: "https://picsum.photos/300/300",
        salePrice: 180,
        description: "Description 6",
        url: "#!/product/6",
      },
  ];

  $scope.productId = $routeParams.id;
  $scope.productDetail = $scope.products.find(product => product.id === parseInt($routeParams.id, 10));
  console.log($scope.productDetail);
});

