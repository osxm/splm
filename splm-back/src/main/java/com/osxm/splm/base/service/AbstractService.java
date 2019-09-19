/**
 * @Title: AbstractService.java
 * @Package com.osxm.splm.base.service
 * @Description: TODO
 * @author oscarchen
 * @date 2019Äê9ÔÂ19ÈÕ
 * @version V1.0
 */
package com.osxm.splm.base.service;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

/**
 * @ClassName: AbstractService
 * @Description: TODO
 * @author oscarchen
 */
@Service
@Transactional
public class AbstractService<T> {

	@PersistenceContext
	protected EntityManager em;

	@SuppressWarnings("unchecked")
	public T get(String uid) {
		return (T) em.find(this.getActualClass(), uid);
	}

	@SuppressWarnings({ "rawtypes" })
	public Class getActualClass() {
		Class actualClass = null;
		Type genType = getClass().getGenericSuperclass();
		if (!(genType instanceof ParameterizedType)) {
			actualClass = Object.class;
		} else {
			ParameterizedType pt = (ParameterizedType) genType;
			actualClass = (Class) pt.getActualTypeArguments()[0];
		}
		return actualClass;
	}
}
