export interface ResponseFamily {
  ok: boolean;
  count: number;
  members: Member[];
}

export interface Member {
  secretFriend?: string;
  selected?: boolean;
  _id?: string;
  name?: string;
  gender?: string;
  avatar?: string;
}
