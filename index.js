$(document).ready(function () {
    var parse_query = function (query_string) {

        if (is_empty(query_string)) {
            return {};
        }
        var query = {};
        query_string = query_string.charAt(0) === '?' ? query_string.substring(1) : query_string;
        console.log(query_string);
        var query_array = query_string.split('&');
        query_array.forEach(function (q) {
            var kv = q.split('=');
            console.log(kv);
            query[kv[0]] = kv[1];
        });
        return query;

    };

    var is_empty = function (s) {
        return s === null || s === undefined || s === '';
    };

    var date_diff_days = function (start, end) {
        return (end.getTime() - start.getTime()) / 1000 / 60 / 60 / 24;
    };

    var datetime_to_date = function (datetime) {
        var year = datetime.getFullYear();
        var month = left_padding_zero((datetime.getMonth() + 1));
        var day = left_padding_zero(datetime.getDate());
        return new Date(year + '-' + month + '-' + day + ' 00:00:00');
    };

    var datetime_to_utc_date = function (datetime) {
        var year = datetime.getUTCFullYear();
        var month = left_padding_zero((datetime.getUTCMonth() + 1));
        var day = left_padding_zero(datetime.getUTCDate());
        return new Date(year + '-' + month + '-' + day + 'T00:00:00Z');
    };

    var datetime_to_date_str = function (datetime) {
        var year = datetime.getFullYear();
        var month = left_padding_zero((datetime.getMonth() + 1));
        var day = left_padding_zero(datetime.getDate());
        return year + '-' + month + '-' + day;
    };

    var left_padding_zero = function (int) {
        return int < 10 ? '0' + int : int;
    };

    var parse_last_page = function (link_header) {
        if (is_empty(link_header)) {
            return 1;
        }

        var lks = link_header.split(',');
        lks.forEach(function (lk) {
            var url_rel = lk.split(';');
            if (url_rel[1].indexOf('last') > -1) {
                return parseInt(parse_query(url_rel[0].substring(url_rel[0].indexOf('?'), url_rel[0].length - 1))['page']);
            }
        });

        return 1;
    };

    var random_int = function (start, end) {
        return Math.floor(start + (end - start) * Math.random());
    };

    var select_token = function () {
        const access_tokens = [
            '4c61c7e58785bb8b2789224381b2e1331083ffa7',
            'a95aaa5a06cf5aa871ccc2f670371cfcb556cbd8',
            '46dcf5dead1cb95385eab0ebab674e3dd3601dcc',
            '6226fb196321a8a1b685b735e7208b909e12ef48',
            '76183e52d0b0b1e9265088be5197df9f1a14454e'];

        return access_tokens[random_int(0, access_tokens.length)];
    };

    $.ajaxSetup({
        error: function (xhr, status, error) {
            if (xhr.status === 403) {
                alert('Sorry, exceeds github api rate limit, you can specify a access_token, visit https://github.com/pingao777/github-gazer for more detail');
            } else {
                alert('Error occurred: ' + status + ', Error: ' + error);
            }
            console.error(xhr.responseText);
        }
    });

    var invoke_github_api = function (url, callback) {
        $.ajax({
            headers: {
                Accept: 'application/vnd.github.v3.star+json; charset=utf-8'
            },
            url: url,
            dataType: 'json',
            type: 'get',
            async: true,
            success: function (data, status, xhr) {
                callback(data, xhr);
            }
        });
    };

    var display_issue_chart = function (q, description, open_issue_count, closed_issue_count) {
        var myChart = echarts.init(document.getElementById('issue-chart'), 'dark');

        var option = {
            backgroundColor: 'rgba(0,0,0,0.0)',
            title: {
                text: 'Stargazers Trend',
                subtext: q + (is_empty(description) ? '' : ': ' + description),
                sublink: 'https://github.com/' + q,
                left: '11%',  // 不要用right，否则副标题不显示
                top: '1%'  // 不要用bottom，否则副标题不显示
            },
            tooltip : {
                position: function (point, params, dom, rect, size) {
                    return [point[0] + 15, point[1]];
                },
                formatter: function (params) {
                    return params['marker'] + ' ' + params['value'] + ' issues' + ' ' + params['seriesName'];

                }
            },
            grid: {
                top: 65,
                bottom: 0
            },
            xAxis:  {
                type: 'value',
                max: open_issue_count + closed_issue_count,
                show: false
            },
            yAxis: {
                type: 'category',
                data: ['Issues'],
                show: false
            },
            color: ['#ea6677', '#28a745'],
            series: [
                {
                    name: 'unsolved',
                    type: 'bar',
                    barWidth: 5,
                    stack: 'Total',
                    data: [open_issue_count]
                },
                {
                    name: 'solved',
                    type: 'bar',
                    barWidth: 5,
                    stack: 'Total',
                    data: [closed_issue_count]
                }
            ]
        };

        myChart.setOption(option);
    };

    var display_star_chart = function (q, data) {
        var myChart = echarts.init(document.getElementById('star-chart'), 'dark');

        var option = {
            backgroundColor: 'rgba(0,0,0,0.0)',
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    return params[0]['marker'] + ' '
                        + params[0]['value'][1] + ' stars on '
                        + echarts.format.formatTime('yyyy-MM-dd', params[0]['axisValue']);
                }
            },
            xAxis: {
                type: 'time',
                minInterval: mill_sec_one_day,
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        width: 3
                    }
                },
                axisTick: {
                    lineStyle: {
                        width: 2
                    }
                },
                axisLabel: {
                    interval: 0,
                    formatter: function (value, index) {
                        return echarts.format.formatTime('yyyy-MM-dd', value);
                    }
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    show: false,
                    onZero: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: '#434343',
                        type: 'solid',
                        width: 2
                    }
                },
                min: 'dataMin'
            },
            visualMap: {
                show: false,
                dimension: 1,
                pieces: [{
                    lte: 0,
                    color: 'rgba(40,167,69,1.0)'
                }, {
                    lte: github_returned_max_stars,
                    color: 'rgba(40,167,69,1.0)'
                }, {
                    gt: github_returned_max_stars,
                    color: 'rgba(40,167,69,0.3)'
                }]
            },
            dataZoom: [
                {
                    type: 'slider',
                    realtime: false,
                    xAxisIndex: 0,
                    filterMode: 'filter',
                    dataBackground: {
                        areaStyle: {
                            color: 'rgba(255,255,255,0.5)'
                        }
                    },
                    labelFormatter: function (value) {
                        return echarts.format.formatTime('yyyy-MM-dd', value);
                    }
                },
                {
                    type: 'inside',
                    xAxisIndex: 0,
                    filterMode: 'filter'
                }
            ],
            series: [
                {
                    id: 'a',
                    type: 'line',
                    showSymbol: false,
                    smooth: true,
                    data: data,
                    markPoint: {
                        silent: true,
                        data: [
                            {type: 'max', name: 'Stargazers Now'}
                        ]
                    },
                    color: 'rgba(40,167,69,1.0)'
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    };

    var display_star_watch_fork_chart = function (q, stars_count, watches_count, forks_count) {
        var myChart = echarts.init(document.getElementById('star-watch-fork-chart'), 'dark');
        var option = {
            backgroundColor: 'rgba(0,0,0,0.0)',
            tooltip: {},
            radar: {
                shape: 'circle',
                indicator: [
                    {name: 'Star', max: Math.max(stars_count, watches_count, forks_count)},
                    {name: 'Watch', max: Math.max(stars_count, watches_count, forks_count)},
                    {name: 'Fork', max: Math.max(stars_count, watches_count, forks_count)}
                ],
                splitLine: {
                    lineStyle: {
                        color: [
                            'rgba(45, 234, 148, 0.1)', 'rgba(45, 234, 148, 0.2)',
                            'rgba(45, 234, 148, 0.4)', 'rgba(45, 234, 148, 0.6)',
                            'rgba(45, 234, 148, 0.8)', 'rgba(45, 234, 148, 1)'
                        ].reverse()
                    }
                },
                splitArea: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(45, 234, 148, 0.5)'
                    }
                }
            },
            series: [{
                name: 'Activity',
                type: 'radar',
                symbolSize: 0,
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data: [
                    {
                        value: [stars_count, watches_count, forks_count],
                        name: 'Activity'
                    }
                ],
                color: 'rgba(40,167,69,1.0)'

            }]
        };

        myChart.setOption(option);
    };

    var display_follower_following_chart = function (q, follower_count, following_count) {
        var myChart = echarts.init(document.getElementById('follower-following-chart'), 'dark');

        var option = {
            backgroundColor: 'rgba(0,0,0,0.0)',
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c}'
            },
            color: ['#005cc5', '#28a745'],
            series: [
                {
                    name: 'Relation',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            formatter: '{b}: {c}'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true
                        }
                    },
                    data: [
                        {value: follower_count, name: 'Follower'},
                        {value: following_count, name: 'Following'}
                    ]
                }
            ]
        };

        myChart.setOption(option);
    };

    var display_commit_chart = function (q, start, end, commits) {
        var myChart = echarts.init(document.getElementById('commit-chart'), 'dark');

        var option = {
            backgroundColor: 'rgba(0,0,0,0.0)',
            title: {
                subtext: 'Repository Commit Activity: ' + get_total_commit_count(commits) + ' commits during ' + datetime_to_date_str(start) + ' ~ ' + datetime_to_date_str(end),
                left: '11%',  // 不要用right，否则副标题不显示
                top: '1%'  // 不要用bottom，否则副标题不显示
            },
            tooltip: {
                position: 'top',
                formatter: function (params) {
                    return params['marker'] + ' '
                        + params['value'][1] + ' commits on '
                        + echarts.format.formatTime('yyyy-MM-dd', params['value'][0]);

                }
            },
            visualMap: {
                show: false,
                min: 0,
                max: 10,
                calculable: true,
                orient: 'horizontal',
                left: 'center',
                top: 'top',
                inRange: {
                    color: ['#4A4A4A', '#c6e48b', '#7bc96f', '#239a3b', '#196127']
                }
            },

            calendar: [
                {
                    range: [start, end],
                    left: 'center',
                    cellSize: [15, 15],
                    splitLine: {
                        show: false
                    },
                    itemStyle: {
                        borderWidth: 2,
                        borderColor: '#000'
                    },
                    dayLabel: {
                        show: false
                    },
                    monthLabel: {
                        color: '#fff'
                    },
                    yearLabel: {
                        show: false
                    }

                }],

            series: [{
                type: 'heatmap',
                coordinateSystem: 'calendar',
                calendarIndex: 0,
                data: commits
            }]

        };

        myChart.setOption(option);
    };

    var get_total_commit_count = function (commits) {
        var commits_total_count = 0;
        commits.forEach(function (c) {
            commits_total_count += c[1];
        });
        return commits_total_count;
    };

    const github_returned_max_stars = 39999;
    const mill_sec_one_day = 24 * 3600 * 1000;

    var query = parse_query(window.location.search);
    var q = is_empty(query['q']) ? 'pingao777/markdown-preview-sync' : query['q'];

    var render_issue_chart = function (q) {
        var repo_url = 'https://api.github.com/repos/' + q
            + '?access_token=' + select_token();
        invoke_github_api(repo_url, function (repo_data) {
            var description = repo_data['description'];

            var open_issue_url = 'https://api.github.com/search/issues?q=type:issue+state:open+repo:' + q
                + '&access_token=' + select_token();

            invoke_github_api(open_issue_url, function (issue_data) {
                var open_issue_count = issue_data['total_count'];

                var closed_issue_url = 'https://api.github.com/search/issues?q=type:issue+state:closed+repo:' + q
                    + '&access_token=' + select_token();

                invoke_github_api(closed_issue_url, function (issue_data) {
                    var closed_issue_count = issue_data['total_count'];
                    display_issue_chart(q, description, open_issue_count, closed_issue_count)
                })
            });
        });
    };

    var render_stargazers = function (q) {
        var user = q.split('/')[0];
        var repo = q.split('/')[1];
        var search_url = 'https://api.github.com/search/repositories?q=user:' + user + '+repo:' + repo + '+' + repo
            + '&access_token=' + select_token();

        invoke_github_api(search_url, function (search_data) {
            var stargazers_count = search_data['items'][0]['stargazers_count'];
            var stargazers = [];
            var page = 1;
            var page_size = 100;
            // github最多返回40000条数据
            var return_stargazers_count = Math.min(stargazers_count, github_returned_max_stars);
            var page_count = Math.ceil(return_stargazers_count / page_size);

            if (page_count === 0) {
                display_star_chart(q, stargazers);
            } else {
                var load_page_count = 0;
                while (page <= page_count) {
                    var url = 'https://api.github.com/repos/' + q + '/stargazers?per_page=' + page_size + '&page=' + page
                        + '&access_token=' + select_token();

                    (function (page) {
                        invoke_github_api(url, function (stargazers_data) {
                            var stargazers_per_page = stargazers_data.map(function (e, i) {
                                return [e.starred_at, i + 1 + (page - 1) * 100];
                            });

                            stargazers = stargazers.concat(stargazers_per_page);
                            load_page_count++;

                            var progress = load_page_count / page_count * 100;
                            $('#progress-bar').css('width', progress + '%');
                            if (progress >= 100) {
                                stargazers.sort(function (s1, s2) {
                                    return s1[1] - s2[1];
                                });
                                if (stargazers_count > github_returned_max_stars) {
                                    stargazers.push([new Date().toISOString(), stargazers_count]);
                                }
                                display_star_chart(q, stargazers);
                                $('#progress-bar').css('background-color', '#000');
                            }
                        });
                    })(page);

                    page++;
                }
            }
        });
    };

    var render_follower_following_chart = function (q) {
        var user = q.split('/')[0];
        var url = 'https://api.github.com/users/' + user + '?access_token=' + select_token();

        invoke_github_api(url, function (relation_data) {
            var follower_count = relation_data['followers'];
            var following_count = relation_data['following'];
            display_follower_following_chart(q, follower_count, following_count);
        });
    };

    var render_star_watch_fork_chart = function (q) {
        var user = q.split('/')[0];
        var repo = q.split('/')[1];
        var search_url = 'https://api.github.com/search/repositories?q=user:' + user + '+repo:' + repo + '+' + repo
            + '&access_token=' + select_token();

        invoke_github_api(search_url, function (search_data) {
            var stargazers_count = search_data['items'][0]['stargazers_count'];
            var forks_count = search_data['items'][0]['forks_count'];

            var watches_count = 0;
            var page = 1;
            var page_size = 100;
            var watch_url = 'https://api.github.com/repos/' + q + '/subscribers?per_page=' + page_size + '&page=' + page
                + '&access_token=' + select_token();

            invoke_github_api(watch_url, function (watch_data, xhr) {

                var last_page = parse_last_page(xhr.getResponseHeader('Link'));

                if (last_page === 1) {
                    watches_count += watch_data.length;
                    display_star_watch_fork_chart(q, stargazers_count, watches_count, forks_count);

                } else {
                    watch_url = 'https://api.github.com/repos/' + q + '/subscribers?per_page=' + page_size + '&page=' + last_page
                        + '&access_token=' + select_token();

                    invoke_github_api(watch_url, function (watch_data) {
                        watches_count = (last_page - 1) * page_size + watch_data.length;
                        display_star_watch_fork_chart(q, stargazers_count, watches_count, forks_count);
                    });
                }
            });

        });

    };

    var render_commit_chart = function (q) {
        var now = new Date();
        var today = datetime_to_utc_date(now);

        var url = 'https://api.github.com/repos/' + q + '/stats/commit_activity' + '?access_token=' + select_token();

        var do_render_commit_chart = function (commit_data) {
            var week = now.getUTCDay();
            var days = 51 * 7 + week + 1;
            var one_year_ago = new Date(today.getTime() - (days - 1) * mill_sec_one_day);

            var commits = new Array(days);

            for (var i = 0; i < commits.length; i++) {
                commits[i] = [new Date(one_year_ago.getTime() + i * mill_sec_one_day).toISOString(), commit_data[Math.floor(i / 7)]['days'][i % 7]];
            }

            display_commit_chart(q, one_year_ago, today, commits);
        };

        invoke_github_api(url, function (commit_data) {
            if ($.isEmptyObject(commit_data)) {
                invoke_github_api(url, function (commit_data) {
                    if ($.isEmptyObject(commit_data)) {
                        invoke_github_api(url, function (commit_data) {
                            if ($.isEmptyObject(commit_data)) {
                                alert('Fail to get commit data after 3 tries');
                            } else {
                                do_render_commit_chart(commit_data);
                            }
                        });
                    } else {
                        do_render_commit_chart(commit_data);
                    }
                });
            } else {
                do_render_commit_chart(commit_data);
            }
        });
    };

    // var stargazers = [1, 2];
    render_issue_chart(q);
    render_stargazers(q);
    render_star_watch_fork_chart(q);
    render_follower_following_chart(q);
    render_commit_chart(q);
});