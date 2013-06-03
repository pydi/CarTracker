Ext.data.JsonP.Ext_util_DelayedTask({"enum":null,"inheritable":null,"tagname":"class","singleton":false,"override":null,"html_meta":{},"mixins":[],"inheritdoc":null,"statics":{"property":[],"event":[],"css_mixin":[],"method":[],"cfg":[],"css_var":[]},"files":[{"href":"DelayedTask.html#Ext-util-DelayedTask","filename":"DelayedTask.js"}],"alternateClassNames":[],"aliases":{},"component":false,"linenr":25,"members":{"property":[{"owner":"Ext.util.DelayedTask","tagname":"property","meta":{},"name":"id","id":"property-id"}],"event":[],"css_mixin":[],"method":[{"owner":"Ext.util.DelayedTask","tagname":"method","meta":{},"name":"constructor","id":"method-constructor"},{"owner":"Ext.util.DelayedTask","tagname":"method","meta":{},"name":"cancel","id":"method-cancel"},{"owner":"Ext.util.DelayedTask","tagname":"method","meta":{},"name":"delay","id":"method-delay"}],"cfg":[],"css_var":[]},"extends":null,"uses":[],"private":null,"mixedInto":[],"subclasses":[],"superclasses":[],"name":"Ext.util.DelayedTask","meta":{},"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/DelayedTask.html#Ext-util-DelayedTask' target='_blank'>DelayedTask.js</a></div></pre><div class='doc-contents'><p>The DelayedTask class provides a convenient way to \"buffer\" the execution of a method,\nperforming setTimeout where a new timeout cancels the old timeout. When called, the\ntask will wait the specified time period before executing. If durng that time period,\nthe task is called again, the original call will be cancelled. This continues so that\nthe function is only called a single time for each iteration.</p>\n\n<p>This method is especially useful for things like detecting whether a user has finished\ntyping in a text field. An example would be performing validation on a keypress. You can\nuse this class to buffer the keypress events for a certain number of milliseconds, and\nperform only if they stop for that amount of time.</p>\n\n<h2>Usage</h2>\n\n<pre><code>var task = new <a href=\"#!/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a>(function(){\n    alert(<a href=\"#!/api/Ext-method-getDom\" rel=\"Ext-method-getDom\" class=\"docClass\">Ext.getDom</a>('myInputField').value.length);\n});\n\n// Wait 500ms before calling our function. If the user presses another key\n// during that 500ms, it will be cancelled and we'll wait another 500ms.\n<a href=\"#!/api/Ext-method-get\" rel=\"Ext-method-get\" class=\"docClass\">Ext.get</a>('myInputField').on('keypress', function() {\n    task.<a href=\"#!/api/Ext.util.DelayedTask-method-delay\" rel=\"Ext.util.DelayedTask-method-delay\" class=\"docClass\">delay</a>(500);\n});\n</code></pre>\n\n<p>Note that we are using a DelayedTask here to illustrate a point. The configuration\noption <code>buffer</code> for <a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener/on</a> will\nalso setup a delayed task for you to buffer events.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-id' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.DelayedTask'>Ext.util.DelayedTask</span><br/><a href='source/DelayedTask.html#Ext-util-DelayedTask-property-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.DelayedTask-property-id' class='name expandable'>id</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The id of the currently pending invocation. ...</div><div class='long'><p>The id of the currently pending invocation.  Will be set to <code>null</code> if there is no\ninvocation pending.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.DelayedTask'>Ext.util.DelayedTask</span><br/><a href='source/DelayedTask.html#Ext-util-DelayedTask-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.util.DelayedTask-method-constructor' class='name expandable'>Ext.util.DelayedTask</a>( <span class='pre'>[fn], [scope], [args], [cancelOnDelay]</span> ) : <a href=\"#!/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a></div><div class='description'><div class='short'>The parameters to this constructor serve as defaults and are not required. ...</div><div class='long'><p>The parameters to this constructor serve as defaults and are not required.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>The default function to call. If not specified here, it must be specified during the <a href=\"#!/api/Ext.util.DelayedTask-method-delay\" rel=\"Ext.util.DelayedTask-method-delay\" class=\"docClass\">delay</a> call.</p>\n</div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>The default scope (The <strong><code>this</code></strong> reference) in which the\nfunction is called. If not specified, <code>this</code> will refer to the browser window.</p>\n</div></li><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a> (optional)<div class='sub-desc'><p>The default Array of arguments.</p>\n</div></li><li><span class='pre'>cancelOnDelay</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'><p>By default, each call to <a href=\"#!/api/Ext.util.DelayedTask-method-delay\" rel=\"Ext.util.DelayedTask-method-delay\" class=\"docClass\">delay</a> cancels any pending invocation and reschedules a new\ninvocation. Specifying this as <code>false</code> means that calls to <a href=\"#!/api/Ext.util.DelayedTask-method-delay\" rel=\"Ext.util.DelayedTask-method-delay\" class=\"docClass\">delay</a> when an invocation is pending just update the call settings,\n<code>newDelay</code>, <code>newFn</code>, <code>newScope</code> or <code>newArgs</code>, whichever are passed.</p>\n<p>Defaults to: <code>true</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-cancel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.DelayedTask'>Ext.util.DelayedTask</span><br/><a href='source/DelayedTask.html#Ext-util-DelayedTask-method-cancel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.DelayedTask-method-cancel' class='name expandable'>cancel</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Cancel the last queued timeout ...</div><div class='long'><p>Cancel the last queued timeout</p>\n</div></div></div><div id='method-delay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.DelayedTask'>Ext.util.DelayedTask</span><br/><a href='source/DelayedTask.html#Ext-util-DelayedTask-method-delay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.DelayedTask-method-delay' class='name expandable'>delay</a>( <span class='pre'>newDelay, [newFn], [newScope], [newArgs]</span> )</div><div class='description'><div class='short'>By default, cancels any pending timeout and queues a new one. ...</div><div class='long'><p>By default, cancels any pending timeout and queues a new one.</p>\n\n<p>If the <code>cancelOnDelay</code> parameter was specified as <code>false</code> in the constructor, this does not cancel and\nreschedule, but just updates the call settings, <code>newDelay</code>, <code>newFn</code>, <code>newScope</code> or <code>newArgs</code>, whichever are passed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newDelay</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The milliseconds to delay</p>\n</div></li><li><span class='pre'>newFn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>Overrides function passed to constructor</p>\n</div></li><li><span class='pre'>newScope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>Overrides scope passed to constructor. Remember that if no scope\nis specified, <code>this</code> will refer to the browser window.</p>\n</div></li><li><span class='pre'>newArgs</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a> (optional)<div class='sub-desc'><p>Overrides args passed to constructor</p>\n</div></li></ul></div></div></div></div></div></div></div>","id":"class-Ext.util.DelayedTask","requires":[],"parentMixins":[]});