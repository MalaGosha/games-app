
import { NavigationMenu } from "./NavigationMenuEnum";

export type FreeGamesType = {
    title: string;
    id: string;
    namespace: string;
    description: string;
    effectiveDate: string;
    offerType: string;
    expiryDate: string;
    viewableDate: string;
    status: string;
    isCodeRedemptionOnly: boolean;
    keyImages: [{type: string, url: string}];
    seller: {id: string, name: string};
    productSlug: string;
    urlSlug: string;
    items: [{id: string, namespace: string}];
    customAttributes: [{key: string, value: string}];
    categories: [{path: string}];
    tags: [];
    catalogNs: {mapping: []};
    offerMappings: [];
    price: { totalPrice: {discountPrice: number, originalPrice: number, voucherDiscount: number, discount: number, currencyCode: string, currencyInfo: { decimals: number}, fmtPrice: {originalPrice: string, discountPrice: string, intermediatePrice: string }}, lineOffers: [{appliedRules: []}]}
    promotions: {promotionalOffers: [{promotionalOffers: [{startDate: string, endDate: string, discountSetting: {discountType: string, discountPercentage: number}}]}], upcomingPromotionalOffers:[] }
}

export const transformFreeGames = (response: any) => {
    const freeGame = response.freeGames.current.map((game: FreeGamesType) => {
        const title = game.title;
        const description = game.description;
        const urlImage = game.keyImages[0].url;
        const type = NavigationMenu.FREE_GAMES;
        return (
            {
                title: title,
                description: description,
                urlImage: urlImage,
                type: type,
            }
        )
    })
    return freeGame
}

    