type EntityWithId = {
  id: string;
};

type EntityWithIdAndName = EntityWithId & {
  name: string;
};

export type { EntityWithId, EntityWithIdAndName };
