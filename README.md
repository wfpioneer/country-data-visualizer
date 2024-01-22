# Country Data Visualiser

This project fetches the country data from `https://countries.trevorblades.com` GraphQL API and stores it in a cache. The user can then search a country by its country code, if the data is cached it is fetched directly from the cache, if not, it fetches the data from the remote api.

## Key Features

- Input: User can type in a key value (like ID from the countries API)
- Submit Button: load the request from the API if not available, if it's been already fetched, load it from cache
- Error Handling - If there is an error in the process, the user is allowed to resubmit fetch again and/or gracefully handle the error
- Clear Cache - Button to clear cache
- Refetch - Button to refetch from remote system and update cache
- Disable Buttons - Buttons that are irrelevant based on the state are disabled

## Getting Started

To get a local copy up and running follow these simple steps:

### Prerequisites

- NodeJs
- npm/yarn

### Installation

1. Clone the repo

```sh
git clone https://github.com/wfpioneer/country-data-visualizer.git
```

2. In the root directory of the project:

Install all the project dependencies running:

```sh
npm install
```

3. Run the application locally:

```sh
npm start
```

The application should start and be available in the following address `http://localhost:3000`

## Tech-stack Used

- ReactJs
- Typescript
- Apollo client
- Context API for caching
- Ant Design (UI library)

## Choice of Custom Cache over GraphQl's In-built cache

The Apollo Client indeed provides caching out of the box, but for the purpose of this assessment, to demonstrate the working of a caching system, a custom caching solution was implemented using the Context API. This helped in understanding and handling the cache data manually and how it can significantly improve the performance by minimising unnecessary network requests.

This hands-on control over caching mechanisms particularly demonstrates its utility when dealing with complex and nested objects. The inbuilt Apollo's cache may not effectively manage to update or refetch specific parts of these objects. But with a custom solution, these mechanisms can be finely tuned according to the specific requirements.

## Development Process

- Created a new React project using `create-react-app` and set it up with TypeScript.
- Used the Apollo client to fetch the data and store it in cache.
- User input is taken in to search the country by its code.
- If found in the cache, display it; otherwise, fetch from the API and store it in the cache.
- Error handling is done in case the network/server goes down.
- Buttons to clear the cache and refetch from the server are added. If the cache is empty, refetch and clear buttons are disabled.

## Testing

Currently, I have implemented multiple tests to validate the correct operation of the custom hooks. To execute these tests, use the following command:

```sh
npm test
```

In terms of further development, the provision for testing the UI components is planned. This will ensure the stable and reliable operation of the whole system. Please note, adding tests for UI components will be the next step as time allows.

## Further Improvements

- Enhanced Error Handling: Even though basic error handling has been implemented, there is always room for more robust error management. This could involve handling of network errors, server downtime, or errors originating from the API itself.

- Expand Search Functionality: Currently the input field only allows search by country code. It would be beneficial to add the ability to search by other fields such as country name or region for a better user experience.

- Caching Strategies: While the app currently has simple ‘fetch-and-store’ caching, we can look into implementing more advanced caching strategies like stale-while-revalidate or cache-first-network-second for better optimisation.

- Update Cache Mechanism: Currently, the cache is updated when a request fails to find data in the cache and user clicks the update button. An improvement here could be to regularly update the cache after a certain interval to ensure data freshness and availability.

- Better handling of offline scenarios: The experience for users who are temporarily offline could be improved. This could involve storing user actions and syncing when they're back online.
