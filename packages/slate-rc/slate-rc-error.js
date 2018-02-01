module.exports = class SlateRcError extends require('@shopify/slate-errors') {
  constructor(message) {
    // Providing default message and overriding status code.
    super(message || 'There was an error when processing the .slaterc file');
  }
};
