<?php

// Make any text 'excerpty'
function excerptify($text, $length = 140){
    if(strlen($text) > $length) {
        $excerpt = substr($text, 0, strpos($text, ' ', $length));
        return trim($excerpt, " \t\n\r\0\x0B.!?,;:") . '&hellip;';
    } else {
        return $text;
    }
}

// Search for any urls in the text and replace them with a linked version
function linkify($text){
    $reg_exUrl = "/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/";
    if(preg_match($reg_exUrl, $text, $url)) {
       return preg_replace($reg_exUrl, "<a href=".$url[0].">{$url[0]}</a> ", $text);
    } else {
       return $text;
    }
}

// Gets today's item from an array
function todays_item($arr){
    $count = count($arr);
    $number = floor(time() / 86400) % $count;
    return $arr[$number];
}

// Test if a number is prime 1-liner
function is_prime($number) {
    return !preg_match('/^1?$|^(11+?)\1+$/x', str_repeat('1', $number));
}
