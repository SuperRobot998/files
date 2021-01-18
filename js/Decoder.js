class Decoder {
  constructor(buffer) {
    this.buffer = buffer;
    this.dataview = new DataView(buffer);
    
    this.offset = 0;
  }
  
  string() {
    const length = this.uint8();
    
    let string = '';
    
    for (let i = 0; i < length; i++)
      string += String.fromCharCode(this.uint8());
    
    return string;
  }
  
  int8() {
    const value = this.dataview.getInt8(this.offset);
    
    this.offset++;
    
    return value;
  }
  
  int16() {
    const value = this.dataview.getInt16(this.offset);
    
    this.offset += 2;
    
    return value;
  }
  
  int32() {
    const value = this.dataview.getInt32(this.offset);
    
    this.offset += 4;
    
    return value;
  }
  
  uint8() {
    const value = this.dataview.getUint8(this.offset);
    
    this.offset++;
    
    return value;
  }
  
  uint16() {
    const value = this.dataview.getUint16(this.offset);
    
    this.offset += 2;
    
    return value;
  }
  
  uint32() {
    const value = this.dataview.getUint32(this.offset);
    
    this.offset += 4;
    
    return value;
  }
  
  float32() {
    const value = this.dataview.getFloat32(this.offset);
    
    this.offset += 4;
    
    return value;
  }
  
  float64() {
    const value = this.dataview.getFloat64(this.offset);
    
    this.offset += 8;
    
    return value;
  }
  
  bigint64() {
    const value = this.dataview.getBigInt64(this.offset);
    
    this.offset += 8;
    
    return value;
  }
  
  biguint64() {
    const value = this.dataview.getBigUint64(this.offset);
    
    this.offset += 8;
    
    return value;
  }
}
