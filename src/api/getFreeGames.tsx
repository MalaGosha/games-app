const freeGamesUrl = 'https://free-epic-games.p.rapidapi.com/free'

export const getFreeGames = async () => {
//     return fetch(freeGamesUrl, {
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*',
//             'X-RapidAPI-Key': '78b70e0181mshe88cbad08040692p152dedjsn7d5b0922fe96',
//             'X-RapidAPI-Host': 'free-epic-games.p.rapidapi.com'
//         },
//     }).then((response) => {
//         console.log("Status code get movie is " + response.status)
//         return response.json();
//     })
// }

return {
    "freeGames": {
        "current": [
            {
                "title": "PAYDAY 2",
                "id": "de434b7be57940d98ede93b50cdacfc2",
                "namespace": "d5241c76f178492ea1540fce45616757",
                "description": "PAYDAY 2 is an action-packed, four-player co-op shooter that once again lets gamers don the masks of the original PAYDAY crew - Dallas, Hoxton, Wolf and Chains - as they descend on Washington DC for an epic crime spree.",
                "effectiveDate": "2099-01-01T00:00:00.000Z",
                "offerType": "OTHERS",
                "expiryDate": null,
                "viewableDate": "2023-06-01T14:25:00.000Z",
                "status": "ACTIVE",
                "isCodeRedemptionOnly": true,
                "keyImages": [
                    {
                        "type": "OfferImageWide",
                        "url": "https://cdn1.epicgames.com/offer/d5241c76f178492ea1540fce45616757/mammoth-h1nvv_2560x1440-ac346d6ece5ec356561e112fbddb2dc1"
                    },
                    {
                        "type": "VaultClosed",
                        "url": "https://cdn1.epicgames.com/offer/d5241c76f178492ea1540fce45616757/EN-mega-sale-vault-16x9-asset_1920x1080-a27cf3919dde320a72936374a1d47813"
                    }
                ],
                "seller": {
                    "id": "o-ufmrk5furrrxgsp5tdngefzt5rxdcn",
                    "name": "Epic Dev Test Account"
                },
                "productSlug": "payday-2-c66369",
                "urlSlug": "mystery-game-7",
                "url": null,
                "items": [
                    {
                        "id": "8341d7c7e4534db7848cc428aa4cbe5a",
                        "namespace": "d5241c76f178492ea1540fce45616757"
                    }
                ],
                "customAttributes": [
                    {
                        "key": "com.epicgames.app.freegames.vault.close",
                        "value": "[]"
                    },
                    {
                        "key": "com.epicgames.app.blacklist",
                        "value": "[]"
                    },
                    {
                        "key": "com.epicgames.app.freegames.vault.slug",
                        "value": "sales-and-specials/mega-sale"
                    },
                    {
                        "key": "com.epicgames.app.freegames.vault.open",
                        "value": "[]"
                    },
                    {
                        "key": "com.epicgames.app.productSlug",
                        "value": "payday-2-c66369"
                    }
                ],
                "categories": [
                    {
                        "path": "freegames/vaulted"
                    },
                    {
                        "path": "freegames"
                    },
                    {
                        "path": "games"
                    },
                    {
                        "path": "applications"
                    }
                ],
                "tags": [],
                "catalogNs": {
                    "mappings": []
                },
                "offerMappings": [],
                "price": {
                    "totalPrice": {
                        "discountPrice": 0,
                        "originalPrice": 0,
                        "voucherDiscount": 0,
                        "discount": 0,
                        "currencyCode": "USD",
                        "currencyInfo": {
                            "decimals": 2
                        },
                        "fmtPrice": {
                            "originalPrice": "0",
                            "discountPrice": "0",
                            "intermediatePrice": "0"
                        }
                    },
                    "lineOffers": [
                        {
                            "appliedRules": []
                        }
                    ]
                },
                "promotions": {
                    "promotionalOffers": [
                        {
                            "promotionalOffers": [
                                {
                                    "startDate": "2023-06-08T15:00:00.000Z",
                                    "endDate": "2023-06-15T15:00:00.000Z",
                                    "discountSetting": {
                                        "discountType": "PERCENTAGE",
                                        "discountPercentage": 0
                                    }
                                }
                            ]
                        }
                    ],
                    "upcomingPromotionalOffers": []
                }
            },
            {
                "title": "Guacamelee! Super Turbo Championship Edition",
                "id": "825a2a7eb70b458ab5b3cd9f5b3fa014",
                "namespace": "f5d9b93771214e4cbd60506539d1cfc6",
                "description": "Guacamelee! is a Metroidvania-style action-platformer set in a magical Mexican-inspired world. The game draws its inspiration from traditional Mexican culture and folklore, and features many interesting and unique characters.",
                "effectiveDate": "2023-06-15T15:00:00.000Z",
                "offerType": "BASE_GAME",
                "expiryDate": null,
                "viewableDate": "2023-06-08T14:25:00.000Z",
                "status": "ACTIVE",
                "isCodeRedemptionOnly": false,
                "keyImages": [
                    {
                        "type": "OfferImageWide",
                        "url": "https://cdn1.epicgames.com/spt-assets/7041a1ca4ed543459b95d78887047bd9/guacamelee-stce-ztldk.jpg"
                    },
                    {
                        "type": "OfferImageTall",
                        "url": "https://cdn1.epicgames.com/spt-assets/7041a1ca4ed543459b95d78887047bd9/guacamelee-stce-18fca.jpg"
                    },
                    {
                        "type": "Thumbnail",
                        "url": "https://cdn1.epicgames.com/spt-assets/7041a1ca4ed543459b95d78887047bd9/guacamelee-stce-18fca.jpg"
                    }
                ],
                "seller": {
                    "id": "o-bpuchurz6ebbygak6r2cksb2yk6dxt",
                    "name": "Drinkbox Studios Inc."
                },
                "productSlug": null,
                "urlSlug": "b9d3ef2617e0479c827b861baceba0a9",
                "url": null,
                "items": [
                    {
                        "id": "1f959846bf6641e9bfd6fd92077e720a",
                        "namespace": "f5d9b93771214e4cbd60506539d1cfc6"
                    }
                ],
                "customAttributes": [
                    {
                        "key": "autoGeneratedPrice",
                        "value": "false"
                    },
                    {
                        "key": "isManuallySetViewableDate",
                        "value": "true"
                    },
                    {
                        "key": "isManuallySetPCReleaseDate",
                        "value": "true"
                    },
                    {
                        "key": "isBlockchainUsed",
                        "value": "false"
                    }
                ],
                "categories": [
                    {
                        "path": "freegames"
                    },
                    {
                        "path": "games"
                    },
                    {
                        "path": "games/edition"
                    },
                    {
                        "path": "games/edition/base"
                    }
                ],
                "tags": [
                    {
                        "id": "1264"
                    },
                    {
                        "id": "1344"
                    },
                    {
                        "id": "1336"
                    },
                    {
                        "id": "1370"
                    },
                    {
                        "id": "9547"
                    },
                    {
                        "id": "1151"
                    }
                ],
                "catalogNs": {
                    "mappings": [
                        {
                            "pageSlug": "guacamelee-stce-7cdbc8",
                            "pageType": "productHome"
                        }
                    ]
                },
                "offerMappings": [
                    {
                        "pageSlug": "guacamelee-stce-7cdbc8",
                        "pageType": "productHome"
                    }
                ],
                "price": {
                    "totalPrice": {
                        "discountPrice": 1499,
                        "originalPrice": 1499,
                        "voucherDiscount": 0,
                        "discount": 0,
                        "currencyCode": "USD",
                        "currencyInfo": {
                            "decimals": 2
                        },
                        "fmtPrice": {
                            "originalPrice": "$14.99",
                            "discountPrice": "$14.99",
                            "intermediatePrice": "$14.99"
                        }
                    },
                    "lineOffers": [
                        {
                            "appliedRules": []
                        }
                    ]
                },
                "promotions": {
                    "promotionalOffers": [],
                    "upcomingPromotionalOffers": [
                        {
                            "promotionalOffers": [
                                {
                                    "startDate": "2023-06-15T15:00:00.000Z",
                                    "endDate": "2023-06-22T15:00:00.000Z",
                                    "discountSetting": {
                                        "discountType": "PERCENTAGE",
                                        "discountPercentage": 0
                                    }
                                }
                            ]
                        }
                    ]
                }
            }
        ],
        "upcoming": [
            {
                "title": "Guacamelee! Super Turbo Championship Edition",
                "id": "825a2a7eb70b458ab5b3cd9f5b3fa014",
                "namespace": "f5d9b93771214e4cbd60506539d1cfc6",
                "description": "Guacamelee! is a Metroidvania-style action-platformer set in a magical Mexican-inspired world. The game draws its inspiration from traditional Mexican culture and folklore, and features many interesting and unique characters.",
                "effectiveDate": "2023-06-15T15:00:00.000Z",
                "offerType": "BASE_GAME",
                "expiryDate": null,
                "viewableDate": "2023-06-08T14:25:00.000Z",
                "status": "ACTIVE",
                "isCodeRedemptionOnly": false,
                "keyImages": [
                    {
                        "type": "OfferImageWide",
                        "url": "https://cdn1.epicgames.com/spt-assets/7041a1ca4ed543459b95d78887047bd9/guacamelee-stce-ztldk.jpg"
                    },
                    {
                        "type": "OfferImageTall",
                        "url": "https://cdn1.epicgames.com/spt-assets/7041a1ca4ed543459b95d78887047bd9/guacamelee-stce-18fca.jpg"
                    },
                    {
                        "type": "Thumbnail",
                        "url": "https://cdn1.epicgames.com/spt-assets/7041a1ca4ed543459b95d78887047bd9/guacamelee-stce-18fca.jpg"
                    }
                ],
                "seller": {
                    "id": "o-bpuchurz6ebbygak6r2cksb2yk6dxt",
                    "name": "Drinkbox Studios Inc."
                },
                "productSlug": null,
                "urlSlug": "b9d3ef2617e0479c827b861baceba0a9",
                "url": null,
                "items": [
                    {
                        "id": "1f959846bf6641e9bfd6fd92077e720a",
                        "namespace": "f5d9b93771214e4cbd60506539d1cfc6"
                    }
                ],
                "customAttributes": [
                    {
                        "key": "autoGeneratedPrice",
                        "value": "false"
                    },
                    {
                        "key": "isManuallySetViewableDate",
                        "value": "true"
                    },
                    {
                        "key": "isManuallySetPCReleaseDate",
                        "value": "true"
                    },
                    {
                        "key": "isBlockchainUsed",
                        "value": "false"
                    }
                ],
                "categories": [
                    {
                        "path": "freegames"
                    },
                    {
                        "path": "games"
                    },
                    {
                        "path": "games/edition"
                    },
                    {
                        "path": "games/edition/base"
                    }
                ],
                "tags": [
                    {
                        "id": "1264"
                    },
                    {
                        "id": "1344"
                    },
                    {
                        "id": "1336"
                    },
                    {
                        "id": "1370"
                    },
                    {
                        "id": "9547"
                    },
                    {
                        "id": "1151"
                    }
                ],
                "catalogNs": {
                    "mappings": [
                        {
                            "pageSlug": "guacamelee-stce-7cdbc8",
                            "pageType": "productHome"
                        }
                    ]
                },
                "offerMappings": [
                    {
                        "pageSlug": "guacamelee-stce-7cdbc8",
                        "pageType": "productHome"
                    }
                ],
                "price": {
                    "totalPrice": {
                        "discountPrice": 1499,
                        "originalPrice": 1499,
                        "voucherDiscount": 0,
                        "discount": 0,
                        "currencyCode": "USD",
                        "currencyInfo": {
                            "decimals": 2
                        },
                        "fmtPrice": {
                            "originalPrice": "$14.99",
                            "discountPrice": "$14.99",
                            "intermediatePrice": "$14.99"
                        }
                    },
                    "lineOffers": [
                        {
                            "appliedRules": []
                        }
                    ]
                },
                "promotions": {
                    "promotionalOffers": [],
                    "upcomingPromotionalOffers": [
                        {
                            "promotionalOffers": [
                                {
                                    "startDate": "2023-06-15T15:00:00.000Z",
                                    "endDate": "2023-06-22T15:00:00.000Z",
                                    "discountSetting": {
                                        "discountType": "PERCENTAGE",
                                        "discountPercentage": 0
                                    }
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "title": "Guacamelee! 2",
                "id": "f7aa0e57c2b94acd97a28a7ec99a7ded",
                "namespace": "277e364d24ec43069f4ee3c4414d5096",
                "description": "Head back to the Mexiverse in this long-awaited sequel to the smash hit Guacamelee! Uppercut your way to victory across stunning new hand-crafted levels. Featuring a dense and colorful world, new luchador moves, sassy new bosses, twice the enemies, and 300% more chickens!",
                "effectiveDate": "2023-06-15T15:00:00.000Z",
                "offerType": "BASE_GAME",
                "expiryDate": null,
                "viewableDate": "2023-06-08T14:25:00.000Z",
                "status": "ACTIVE",
                "isCodeRedemptionOnly": false,
                "keyImages": [
                    {
                        "type": "OfferImageWide",
                        "url": "https://cdn1.epicgames.com/spt-assets/b05acd7d28d34f6d93a961b0e53ddf0b/guacamelee-2-1lym2.jpg"
                    },
                    {
                        "type": "OfferImageTall",
                        "url": "https://cdn1.epicgames.com/spt-assets/b05acd7d28d34f6d93a961b0e53ddf0b/guacamelee-2-qew88.jpg"
                    },
                    {
                        "type": "Thumbnail",
                        "url": "https://cdn1.epicgames.com/spt-assets/b05acd7d28d34f6d93a961b0e53ddf0b/guacamelee-2-qew88.jpg"
                    }
                ],
                "seller": {
                    "id": "o-bpuchurz6ebbygak6r2cksb2yk6dxt",
                    "name": "Drinkbox Studios Inc."
                },
                "productSlug": null,
                "urlSlug": "3f2a5aef96e0474792dbcfa974fb39cc",
                "url": null,
                "items": [
                    {
                        "id": "7dac676e21774ce982b02f795444d559",
                        "namespace": "277e364d24ec43069f4ee3c4414d5096"
                    }
                ],
                "customAttributes": [
                    {
                        "key": "autoGeneratedPrice",
                        "value": "false"
                    },
                    {
                        "key": "isManuallySetViewableDate",
                        "value": "true"
                    },
                    {
                        "key": "isManuallySetPCReleaseDate",
                        "value": "true"
                    },
                    {
                        "key": "isBlockchainUsed",
                        "value": "false"
                    }
                ],
                "categories": [
                    {
                        "path": "freegames"
                    },
                    {
                        "path": "games"
                    },
                    {
                        "path": "games/edition"
                    },
                    {
                        "path": "games/edition/base"
                    }
                ],
                "tags": [
                    {
                        "id": "1264"
                    },
                    {
                        "id": "1344"
                    },
                    {
                        "id": "1336"
                    },
                    {
                        "id": "1370"
                    },
                    {
                        "id": "9547"
                    },
                    {
                        "id": "9549"
                    },
                    {
                        "id": "1151"
                    }
                ],
                "catalogNs": {
                    "mappings": [
                        {
                            "pageSlug": "guacamelee-2-ac4977",
                            "pageType": "productHome"
                        }
                    ]
                },
                "offerMappings": [
                    {
                        "pageSlug": "guacamelee-2-ac4977",
                        "pageType": "productHome"
                    }
                ],
                "price": {
                    "totalPrice": {
                        "discountPrice": 1999,
                        "originalPrice": 1999,
                        "voucherDiscount": 0,
                        "discount": 0,
                        "currencyCode": "USD",
                        "currencyInfo": {
                            "decimals": 2
                        },
                        "fmtPrice": {
                            "originalPrice": "$19.99",
                            "discountPrice": "$19.99",
                            "intermediatePrice": "$19.99"
                        }
                    },
                    "lineOffers": [
                        {
                            "appliedRules": []
                        }
                    ]
                },
                "promotions": {
                    "promotionalOffers": [],
                    "upcomingPromotionalOffers": [
                        {
                            "promotionalOffers": [
                                {
                                    "startDate": "2023-06-15T15:00:00.000Z",
                                    "endDate": "2023-06-22T15:00:00.000Z",
                                    "discountSetting": {
                                        "discountType": "PERCENTAGE",
                                        "discountPercentage": 0
                                    }
                                }
                            ]
                        }
                    ]
                }
            }
        ]
    }
}}