export interface ContactMethod {
  name: string;
  value: string;
  href: string;
}

export interface ContactData {
  title: string;

  methods: ContactMethod[];
}
