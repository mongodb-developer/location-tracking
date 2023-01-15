const socketEvents = {
  // DA means DELIVERY_ASSOCIATE
  UPDATE_DA_LOCATION: 'UPDATE_DA_LOCATION',
  DA_LOCATION_CHANGED: 'DA_LOCATION_CHANGED',

  SHIPMENT_CREATED: 'SHIPMENT_CREATED',
  SHIPMENT_UPDATED: 'SHIPMENT_UPDATED',

  SUBSCRIBE_TO_SHIPMENT: 'SUBSCRIBE_TO_SHIPMENT',
  SUBSCRIBE_TO_DA: 'SUBSCRIBE_TO_DA',

  LEAVE_ROOM: 'LEAVE_ROOM',
};

const dbCollections = {
  users: 'users',
  shipments: 'shipments',
  deliveryAssociates: 'deliveryAssociates',
};

export { socketEvents, dbCollections };
