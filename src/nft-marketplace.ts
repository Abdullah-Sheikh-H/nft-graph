import { BigInt } from "@graphprotocol/graph-ts";
import {
    NftMarketplace,
    itemBought as itemBoughtEvent,
    itemCanceled as itemCanceledEvent,
    itemListed as itemListedEvent,
} from "../generated/NftMarketplace/NftMarketplace";

export function handleitemBought(event: itemBoughtEvent): void {}

export function handleitemCanceled(event: itemCanceledEvent): void {}

export function handleitemListed(event: itemListedEvent): void {}
