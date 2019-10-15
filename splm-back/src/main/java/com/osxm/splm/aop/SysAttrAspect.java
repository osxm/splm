/**
 * @Title: SysAttrAspect.java
 * @Package com.osxm.splm.aop
 * @Description: TODO
 * @author osxm:oscarxueming
 * @date 2019年10月15日 下午10:25:02
 * @version V1.0
 */

package com.osxm.splm.aop;

import java.sql.Timestamp;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

import com.osxm.splm.base.model.SplmRoot;

/**
 * @ClassName: SysAttrAspect
 * @Description: TODO
 * @author osxm:oscarxueming
 */

@Aspect
@Component
public class SysAttrAspect {

	@Pointcut("execution(public * com.osxm.splm..service.*Service.add(..))")
	public void addEntityPointCut() {
	}

	@Pointcut("execution(public * com.osxm.splm..service.*Service.update(..))")
	public void updEntityPointCut() {
	}

	@Around("addEntityPointCut()")
	public Object Around(ProceedingJoinPoint point) throws Throwable {
		SplmRoot result = (SplmRoot) point.proceed();
		result.setSysCreatedDate(new Timestamp(System.currentTimeMillis()));
		return result;
	}

}