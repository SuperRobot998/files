class Encoder {
  constructor(size) {
    this.size = size;
    
    this.buffer = new ArrayBuffer(size);
    this.dataview = new DataView(this.buffer);
    
    this.offset = 0;
  }
  
  string(string) {
    const length = string.length;
    
    this.uint8(length);
    
    for (let i = 0; i < length; i++) this.uint8(string.charCodeAt(i));
    
    return this;
  }
  
  int8(value) {
    this.dataview.setInt8(this.offset, value);
    
    this.offset++;
    
    return this;
  }
  
  int16(value) {
    this.dataview.setInt16(this.offset, value);
    
    this.offset += 2;
    
    return this;
  }
  
  int32(value) {
    this.dataview.setInt32(this.offset, value);
    
    this.offset += 4;
    
    return this;
  }
  
  uint8(value) {
    this.dataview.setUint8(this.offset, value);
    
    this.offset++;
    
    return this;
  }
  
  uint16(value) {
    this.dataview.setUint16(this.offset, value);
    
    this.offset += 2;
    
    return this;
  }
  
  uint32(value) {
    this.dataview.setUint32(this.offset, value);
    
    this.offset += 4;
    
    return this;
  }
  
  float32(value) {
    this.dataview.setFloat32(this.offset, value);
    
    this.offset += 4;
    
    return this;
  }
  
  float64(value) {
    this.dataview.setFloat64(this.offset, value);
    
    this.offset += 8;
    
    return this;
  }
  
  bigint64(value) {
    this.dataview.setBigInt64(this.offset, value);
    
    this.offset += 8;
    
    return this;
  }
  
  biguint64(value) {
    this.dataview.setBigUint64(this.offset, value);
    
    this.offset += 8;
    
    return this;
  }
}
