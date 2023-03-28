import { createClient } from "@sanity/client";
import { definePreview } from "@sanity/preview-kit";
import urlBuilder from "@sanity/image-url";
import { Image } from "~/types";

export const projectId = "k3ccmgn2";
export const dataset = "car-rental-sanity";
export const apiVersion = "2023-01-01";

export const client = createClient({ projectId, dataset });
export const usePreview = definePreview({ projectId, dataset });

const builder = urlBuilder({ projectId, dataset });
export const urlFor = (source: Image) => {
	return builder.image(source);
};
