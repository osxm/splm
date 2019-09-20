/**
 * @Title: SplmRoot.java
 * @Package com.osxm.splm.base.model
 * @Description: TODO
 * @author oscarchen
 * @date 2019Äê9ÔÂ18ÈÕ
 * @version V1.0
 */
package com.osxm.splm.base.model;

import java.sql.Timestamp;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import org.hibernate.annotations.GenericGenerator;

/**
 * @ClassName: SplmRoot
 * @Description: TODO
 * @author oscarchen
 */
@MappedSuperclass
//@GenericGenerator(name = "jpa-uuid", strategy = "uuid")
public abstract class SplmRoot {

  //@Id
  // @GeneratedValue(generator = "jpa-uuid")
  //@GeneratedValue(generator = "jpa-uuid")
  // @Column(length = 32)
  //@GeneratedValue(generator = "jpa-uuid")
  //@GenericGenerator(name = "uuid2", strategy = "org.hibernate.id.UUIDGenerator")
  //@Column(name = "uid", columnDefinition = "VARCHAR(255)")
  //@GeneratedValue(strategy = GenerationType.AUTO)
 
  @Id
  @GeneratedValue(generator = "system-uuid")
  @GenericGenerator(name = "system-uuid", strategy = "uuid2")
  private String uid;


  private Timestamp sysCreatedDate;

  private String sysCreator;

  private Timestamp sysModifiedDate;

  private String sysModifier;

  public String getUid() {
      return uid;
  }

  public void setUid(String uid) {
      this.uid = uid;
  }
  
  /*public UUID getUid() {
      return uid;
  }

  public void setUid(UUID uid) {
      this.uid = uid;
  }*/

  public Timestamp getSysCreatedDate() {
      return sysCreatedDate;
  }

  public void setSysCreatedDate(Timestamp sysCreatedDate) {
      this.sysCreatedDate = sysCreatedDate;
  }

  public String getSysCreator() {
      return sysCreator;
  }

  public void setSysCreator(String sysCreator) {
      this.sysCreator = sysCreator;
  }

  public Timestamp getSysModifiedDate() {
      return sysModifiedDate;
  }

  public void setSysModifiedDate(Timestamp sysModifiedDate) {
      this.sysModifiedDate = sysModifiedDate;
  }

  public String getSysModifier() {
      return sysModifier;
  }

  public void setSysModifier(String sysModifier) {
      this.sysModifier = sysModifier;
  }
}