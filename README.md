# @domain.js/queue

[![Build status](https://travis-ci.com/domain-js/queue.svg?branch=master)](https://travis-ci.org/domain-js/queue)
[![codecov](https://codecov.io/gh/domain-js/queue/branch/master/graph/badge.svg)](https://codecov.io/gh/domain-js/queue)

# Installation
<pre>npm i @domain.js/queue --save</pre>

# cnf
专属配置名称 `queue`
| 名称 | 类型 | 必填 | 默认值 | 描述 | 样例 |
| maxListeners | intger | `否` | 10 | 队列处理的最大并发量 | 8 |

# deps
| 模块名 | 别名 | 用到的方法 | 描述 |
| listener | `无` | listen | 队列和消费者对接起来 |
| async | `无` | queue | 利用 async.queue 初始化一个队列 |

# Usage
| 模块名 | 别名 | 用到的方法 | 描述 |
| listener | `无` | listen | 队列和消费者对接起来 |
| async | `无` | queue | 利用 async.queue 初始化一个队列 |
