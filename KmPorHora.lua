local numb = tonumber(arg[1]);
local result

function format_int(number)
    local i, j, minus, int, fraction = tostring(number):find(
                                           '([-]?)(%d+)([.]?%d*)')

    int = int:reverse():gsub("(%d%d%d)", "%1,")
    return minus .. int:reverse():gsub("^,", "") .. fraction
end

if numb == nil then
    escrever("Utilize: /km (Número em Metros)");
    return;
end

result = numb * 10 * 60

enviar(numb .. "m Equivale a " .. format_int(result) .. " Km")
