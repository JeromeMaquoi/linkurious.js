(function(undefined){"use strict";function crush(a){var b,c,d,e=["x","y","dx","dy","old_dx","old_dy","mass","convergence","size","fixed"],f=["source","target","weight"],g=["node","centerX","centerY","size","nextSibling","firstChild","mass","massCenterX","massCenterY"];for(c=0,d=g.length;d>c;c++)b=new RegExp("rp\\(([^,]*), '"+g[c]+"'\\)","g"),a=a.replace(b,0===c?"$1":"$1 + "+c);for(c=0,d=e.length;d>c;c++)b=new RegExp("np\\(([^,]*), '"+e[c]+"'\\)","g"),a=a.replace(b,0===c?"$1":"$1 + "+c);for(c=0,d=f.length;d>c;c++)b=new RegExp("ep\\(([^,]*), '"+f[c]+"'\\)","g"),a=a.replace(b,0===c?"$1":"$1 + "+c);return a}function getWorkerFn(){var a=crush?crush(Worker.toString()):Worker.toString();return";("+a+").call(this);"}var _root=this,inWebWorker=!("document"in _root),Worker=function(){function a(){var a,b,c={},d=arguments.length;for(a=d-1;a>=0;a--)for(b in arguments[a])c[b]=arguments[a][b];return c}function b(a){var b;for(b in a)"hasOwnProperty"in a&&!a.hasOwnProperty(b)||delete a[b];return a}function c(a,b){if(a%n.ppn!==0)throw"np: non correct ("+a+").";if(a!==parseInt(a))throw"np: non int.";if(b in o)return a+o[b];throw"ForceAtlas2.Worker - Inexistant node property given ("+b+")."}function d(a,b){if(a%n.ppe!==0)throw"ep: non correct ("+a+").";if(a!==parseInt(a))throw"ep: non int.";if(b in p)return a+p[b];throw"ForceAtlas2.Worker - Inexistant edge property given ("+b+")."}function e(a,b){if(a%n.ppr!==0)throw"rp: non correct ("+a+").";if(a!==parseInt(a))throw"rp: non int.";if(b in q)return a+q[b];throw"ForceAtlas2.Worker - Inexistant region property given ("+b+")."}function f(a,b,c){c=c||{};j=a,k=b,n.nodesLength=j.length,n.edgesLength=k.length,g(c)}function g(b){n.settings=a(b,n.settings)}function h(){var a,b,f,g,h,i,m,o,p,q,r,s,t,u,v;for(f=0;f<n.nodesLength;f+=n.ppn)j[c(f,"old_dx")]=j[c(f,"dx")],j[c(f,"old_dy")]=j[c(f,"dy")],j[c(f,"dx")]=0,j[c(f,"dy")]=0;if(n.settings.outboundAttractionDistribution){for(p=0,f=0;f<n.nodesLength;f+=n.ppn)p+=j[c(f,"mass")];p/=n.nodesLength}if(n.settings.barnesHutOptimize){var w,x,y=1/0,z=-(1/0),A=1/0,B=-(1/0);for(l=[],f=0;f<n.nodesLength;f+=n.ppn)y=Math.min(y,j[c(f,"x")]),z=Math.max(z,j[c(f,"x")]),A=Math.min(A,j[c(f,"y")]),B=Math.max(B,j[c(f,"y")]);for(l[e(0,"node")]=-1,l[e(0,"centerX")]=(y+z)/2,l[e(0,"centerY")]=(A+B)/2,l[e(0,"size")]=Math.max(z-y,B-A),l[e(0,"nextSibling")]=-1,l[e(0,"firstChild")]=-1,l[e(0,"mass")]=0,l[e(0,"massCenterX")]=0,l[e(0,"massCenterY")]=0,a=1,f=0;f<n.nodesLength;f+=n.ppn)for(b=0;;)if(l[e(b,"firstChild")]>=0)w=j[c(f,"x")]<l[e(b,"centerX")]?j[c(f,"y")]<l[e(b,"centerY")]?l[e(b,"firstChild")]:l[e(b,"firstChild")]+n.ppr:j[c(f,"y")]<l[e(b,"centerY")]?l[e(b,"firstChild")]+2*n.ppr:l[e(b,"firstChild")]+3*n.ppr,l[e(b,"massCenterX")]=(l[e(b,"massCenterX")]*l[e(b,"mass")]+j[c(f,"x")]*j[c(f,"mass")])/(l[e(b,"mass")]+j[c(f,"mass")]),l[e(b,"massCenterY")]=(l[e(b,"massCenterY")]*l[e(b,"mass")]+j[c(f,"y")]*j[c(f,"mass")])/(l[e(b,"mass")]+j[c(f,"mass")]),l[e(b,"mass")]+=j[c(f,"mass")],b=w;else{if(l[e(b,"node")]<0){l[e(b,"node")]=f;break}if(l[e(b,"firstChild")]=a*n.ppr,m=l[e(b,"size")]/2,o=l[e(b,"firstChild")],l[e(o,"node")]=-1,l[e(o,"centerX")]=l[e(b,"centerX")]-m,l[e(o,"centerY")]=l[e(b,"centerY")]-m,l[e(o,"size")]=m,l[e(o,"nextSibling")]=o+n.ppr,l[e(o,"firstChild")]=-1,l[e(o,"mass")]=0,l[e(o,"massCenterX")]=0,l[e(o,"massCenterY")]=0,o+=n.ppr,l[e(o,"node")]=-1,l[e(o,"centerX")]=l[e(b,"centerX")]-m,l[e(o,"centerY")]=l[e(b,"centerY")]+m,l[e(o,"size")]=m,l[e(o,"nextSibling")]=o+n.ppr,l[e(o,"firstChild")]=-1,l[e(o,"mass")]=0,l[e(o,"massCenterX")]=0,l[e(o,"massCenterY")]=0,o+=n.ppr,l[e(o,"node")]=-1,l[e(o,"centerX")]=l[e(b,"centerX")]+m,l[e(o,"centerY")]=l[e(b,"centerY")]-m,l[e(o,"size")]=m,l[e(o,"nextSibling")]=o+n.ppr,l[e(o,"firstChild")]=-1,l[e(o,"mass")]=0,l[e(o,"massCenterX")]=0,l[e(o,"massCenterY")]=0,o+=n.ppr,l[e(o,"node")]=-1,l[e(o,"centerX")]=l[e(b,"centerX")]+m,l[e(o,"centerY")]=l[e(b,"centerY")]+m,l[e(o,"size")]=m,l[e(o,"nextSibling")]=l[e(b,"nextSibling")],l[e(o,"firstChild")]=-1,l[e(o,"mass")]=0,l[e(o,"massCenterX")]=0,l[e(o,"massCenterY")]=0,a+=4,w=j[c(l[e(b,"node")],"x")]<l[e(b,"centerX")]?j[c(l[e(b,"node")],"y")]<l[e(b,"centerY")]?l[e(b,"firstChild")]:l[e(b,"firstChild")]+n.ppr:j[c(l[e(b,"node")],"y")]<l[e(b,"centerY")]?l[e(b,"firstChild")]+2*n.ppr:l[e(b,"firstChild")]+3*n.ppr,l[e(b,"mass")]=j[c(l[e(b,"node")],"mass")],l[e(b,"massCenterX")]=j[c(l[e(b,"node")],"x")],l[e(b,"massCenterY")]=j[c(l[e(b,"node")],"y")],l[e(w,"node")]=l[e(b,"node")],l[e(b,"node")]=-1,x=j[c(f,"x")]<l[e(b,"centerX")]?j[c(f,"y")]<l[e(b,"centerY")]?l[e(b,"firstChild")]:l[e(b,"firstChild")]+n.ppr:j[c(f,"y")]<l[e(b,"centerY")]?l[e(b,"firstChild")]+2*n.ppr:l[e(b,"firstChild")]+3*n.ppr,w!==x){l[e(x,"node")]=f;break}b=w}}if(n.settings.barnesHutOptimize)for(q=n.settings.scalingRatio,f=0;f<n.nodesLength;f+=n.ppn)for(b=0;;)if(l[e(b,"firstChild")]>=0){if(u=Math.sqrt(Math.pow(j[c(f,"x")]-l[e(b,"massCenterX")],2)+Math.pow(j[c(f,"y")]-l[e(b,"massCenterY")],2)),2*l[e(b,"size")]/u<n.settings.barnesHutTheta){if(r=j[c(f,"x")]-l[e(b,"massCenterX")],s=j[c(f,"y")]-l[e(b,"massCenterY")],n.settings.adjustSize?u>0?(v=q*j[c(f,"mass")]*l[e(b,"mass")]/u/u,j[c(f,"dx")]+=r*v,j[c(f,"dy")]+=s*v):0>u&&(v=-q*j[c(f,"mass")]*l[e(b,"mass")]/u,j[c(f,"dx")]+=r*v,j[c(f,"dy")]+=s*v):u>0&&(v=q*j[c(f,"mass")]*l[e(b,"mass")]/u/u,j[c(f,"dx")]+=r*v,j[c(f,"dy")]+=s*v),l[e(b,"nextSibling")]<0)break;b=l[e(b,"nextSibling")];continue}b=l[e(b,"firstChild")]}else{if(l[e(b,"node")]>=0&&l[e(b,"node")]!==f&&(r=j[c(f,"x")]-j[c(l[e(b,"node")],"x")],s=j[c(f,"y")]-j[c(l[e(b,"node")],"y")],u=Math.sqrt(r*r+s*s),n.settings.adjustSize?u>0?(v=q*j[c(f,"mass")]*j[c(l[e(b,"node")],"mass")]/u/u,j[c(f,"dx")]+=r*v,j[c(f,"dy")]+=s*v):0>u&&(v=-q*j[c(f,"mass")]*j[c(l[e(b,"node")],"mass")]/u,j[c(f,"dx")]+=r*v,j[c(f,"dy")]+=s*v):u>0&&(v=q*j[c(f,"mass")]*j[c(l[e(b,"node")],"mass")]/u/u,j[c(f,"dx")]+=r*v,j[c(f,"dy")]+=s*v)),l[e(b,"nextSibling")]<0)break;b=l[e(b,"nextSibling")]}else for(q=n.settings.scalingRatio,g=0;g<n.nodesLength;g+=n.ppn)for(h=0;g>h;h+=n.ppn)r=j[c(g,"x")]-j[c(h,"x")],s=j[c(g,"y")]-j[c(h,"y")],n.settings.adjustSize?(u=Math.sqrt(r*r+s*s)-j[c(g,"size")]-j[c(h,"size")],u>0?(v=q*j[c(g,"mass")]*j[c(h,"mass")]/u/u,j[c(g,"dx")]+=r*v,j[c(g,"dy")]+=s*v,j[c(h,"dx")]+=r*v,j[c(h,"dy")]+=s*v):0>u&&(v=100*q*j[c(g,"mass")]*j[c(h,"mass")],j[c(g,"dx")]+=r*v,j[c(g,"dy")]+=s*v,j[c(h,"dx")]-=r*v,j[c(h,"dy")]-=s*v)):(u=Math.sqrt(r*r+s*s),u>0&&(v=q*j[c(g,"mass")]*j[c(h,"mass")]/u/u,j[c(g,"dx")]+=r*v,j[c(g,"dy")]+=s*v,j[c(h,"dx")]-=r*v,j[c(h,"dy")]-=s*v));for(o=n.settings.gravity/n.settings.scalingRatio,q=n.settings.scalingRatio,f=0;f<n.nodesLength;f+=n.ppn)v=0,r=j[c(f,"x")],s=j[c(f,"y")],u=Math.sqrt(Math.pow(r,2)+Math.pow(s,2)),n.settings.strongGravityMode?u>0&&(v=q*j[c(f,"mass")]*o):u>0&&(v=q*j[c(f,"mass")]*o/u),j[c(f,"dx")]-=r*v,j[c(f,"dy")]-=s*v;for(q=1*(n.settings.outboundAttractionDistribution?p:1),i=0;i<n.edgesLength;i+=n.ppe)g=k[d(i,"source")],h=k[d(i,"target")],m=k[d(i,"weight")],t=Math.pow(m,n.settings.edgeWeightInfluence),r=j[c(g,"x")]-j[c(h,"x")],s=j[c(g,"y")]-j[c(h,"y")],n.settings.adjustSizes?(u=Math.sqrt(Math.pow(r,2)+Math.pow(s,2)-j[c(g,"size")]-j[c(h,"size")]),n.settings.linLogMode?n.settings.outboundAttractionDistribution?u>0&&(v=-q*t*Math.log(1+u)/u/j[c(g,"mass")]):u>0&&(v=-q*t*Math.log(1+u)/u):n.settings.outboundAttractionDistribution?u>0&&(v=-q*t/j[c(g,"mass")]):u>0&&(v=-q*t)):(u=Math.sqrt(Math.pow(r,2)+Math.pow(s,2)),n.settings.linLogMode?n.settings.outboundAttractionDistribution?u>0&&(v=-q*t*Math.log(1+u)/u/j[c(g,"mass")]):u>0&&(v=-q*t*Math.log(1+u)/u):n.settings.outboundAttractionDistribution?(u=1,v=-q*t/j[c(g,"mass")]):(u=1,v=-q*t)),u>0&&(j[c(g,"dx")]+=r*v,j[c(g,"dy")]+=s*v,j[c(h,"dx")]-=r*v,j[c(h,"dy")]-=s*v);var C,D,E,F;if(n.settings.adjustSizes)for(f=0;f<n.nodesLength;f+=n.ppn)j[c(f,"fixed")]||(C=Math.sqrt(Math.pow(j[c(f,"dx")],2)+Math.pow(j[c(f,"dy")],2)),C>n.maxForce&&(j[c(f,"dx")]=j[c(f,"dx")]*n.maxForce/C,j[c(f,"dy")]=j[c(f,"dy")]*n.maxForce/C),D=j[c(f,"mass")]*Math.sqrt((j[c(f,"old_dx")]-j[c(f,"dx")])*(j[c(f,"old_dx")]-j[c(f,"dx")])+(j[c(f,"old_dy")]-j[c(f,"dy")])*(j[c(f,"old_dy")]-j[c(f,"dy")])),E=Math.sqrt((j[c(f,"old_dx")]+j[c(f,"dx")])*(j[c(f,"old_dx")]+j[c(f,"dx")])+(j[c(f,"old_dy")]+j[c(f,"dy")])*(j[c(f,"old_dy")]+j[c(f,"dy")]))/2,F=.1*Math.log(1+E)/(1+Math.sqrt(D)),j[c(f,"x")]=j[c(f,"x")]+j[c(f,"dx")]*(F/n.settings.slowDown),j[c(f,"y")]=j[c(f,"y")]+j[c(f,"dy")]*(F/n.settings.slowDown));else for(f=0;f<n.nodesLength;f+=n.ppn)j[c(f,"fixed")]||(D=j[c(f,"mass")]*Math.sqrt((j[c(f,"old_dx")]-j[c(f,"dx")])*(j[c(f,"old_dx")]-j[c(f,"dx")])+(j[c(f,"old_dy")]-j[c(f,"dy")])*(j[c(f,"old_dy")]-j[c(f,"dy")])),E=Math.sqrt((j[c(f,"old_dx")]+j[c(f,"dx")])*(j[c(f,"old_dx")]+j[c(f,"dx")])+(j[c(f,"old_dy")]+j[c(f,"dy")])*(j[c(f,"old_dy")]+j[c(f,"dy")]))/2,F=j[c(f,"convergence")]*Math.log(1+E)/(1+Math.sqrt(D)),j[c(f,"convergence")]=Math.min(1,Math.sqrt(F*(Math.pow(j[c(f,"dx")],2)+Math.pow(j[c(f,"dy")],2))/(1+Math.sqrt(D)))),j[c(f,"x")]=j[c(f,"x")]+j[c(f,"dx")]*(F/n.settings.slowDown),j[c(f,"y")]=j[c(f,"y")]+j[c(f,"dy")]*(F/n.settings.slowDown));n.iterations++}function i(a){for(var b=0;a>b;b++)h();m()}var j,k,l,m,n={ppn:10,ppe:3,ppr:9,maxForce:10,iterations:0,converged:!1,settings:{linLogMode:!1,outboundAttractionDistribution:!1,adjustSizes:!1,edgeWeightInfluence:0,scalingRatio:1,strongGravityMode:!1,gravity:1,slowDown:1,barnesHutOptimize:!1,barnesHutTheta:.5,startingIterations:1,iterationsPerRender:1}},o={x:0,y:1,dx:2,dy:3,old_dx:4,old_dy:5,mass:6,convergence:7,size:8,fixed:9},p={source:0,target:1,weight:2},q={node:0,centerX:1,centerY:2,size:3,nextSibling:4,firstChild:5,mass:6,massCenterX:7,massCenterY:8};m="undefined"!=typeof window&&window.document?function(){var a;document.createEvent?(a=document.createEvent("Event"),a.initEvent("newCoords",!0,!1)):(a=document.createEventObject(),a.eventType="newCoords"),a.eventName="newCoords",a.data={nodes:j.buffer},requestAnimationFrame(function(){document.dispatchEvent(a)})}:function(){self.postMessage({nodes:j.buffer},[j.buffer])};var r=function(a){switch(a.data.action){case"start":f(new Float32Array(a.data.nodes),new Float32Array(a.data.edges),a.data.config),i(n.settings.startingIterations);break;case"loop":j=new Float32Array(a.data.nodes),i(n.settings.iterationsPerRender);break;case"config":g(a.data.config);break;case"kill":b(n),j=null,k=null,l=null,self.removeEventListener("message",r)}};self.addEventListener("message",r)};if(inWebWorker)eval(getWorkerFn());else{if("undefined"==typeof sigma)throw"sigma is not declared";sigma.prototype.getForceAtlas2Worker=getWorkerFn}}).call(this);
//# sourceMappingURL=worker.js.map