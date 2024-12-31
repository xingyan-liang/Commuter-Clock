export const handler = async (event) => {
  
    const items = {
      1: {
        name: 'Item 1',
        description: 'This is item 1',
      },
      2: {
        name: 'Item 2',
        description: 'This is item 2',
      },
      3: {
        name: 'Item 3',
        description: 'This is item 3',
      }
    }
  
    const itemID = event.pathParameters.itemID;
  
    const item = items[itemID];
  
    if(!item) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'Item not found for ${itemID}' })
      };
    }
  
    const response = {
      statusCode: 200,
      body: JSON.stringify(item),
    };
    return response;
  };
  