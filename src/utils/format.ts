import _ from 'lodash';

export const formatId = (id: string | number) => {
  if (!id) {
    return '';
  }
  return _.padStart(id.toString(), 5, '0');
};

export const formatAddress = (address: string, size = 4) => {
  try {
    if (!address) {
      return '-';
    }
    return `${address.substr(0, 2)}...${address.substr(address.length - size, address.length)}`;
  } catch (error) {
    return address;
  }
};
