import { OnSelectParams } from "@yext/search-ui-react";

const reviewsPath =
  "https://streams-sbx.yext.com/v2/accounts/me/api/locationByNeighborhood";

const fetchSlugForLocationByNeighborhood = async (neighborhood: string) => {
  const requestString = `${reviewsPath}?api_key=0ba9ba83014a28b9c446292127846451&v=20221114&neighborhood=${neighborhood}`;

  try {
    const resp = await fetch(requestString);
    const locationsResponse = await resp.json();
    if (locationsResponse?.response?.docs.length > 0) {
      const locationSlug = locationsResponse.response.docs[0].slug;

      // change the path to the location page with window.location
      window.location.href = `/${locationSlug}`;
    }
  } catch (e) {
    return Promise.reject(e);
  }
};

export const handleFilterSelect = (params: OnSelectParams) => {
  fetchSlugForLocationByNeighborhood(params.newDisplayName);
};
